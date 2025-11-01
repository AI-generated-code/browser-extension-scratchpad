// Constants
const DEBOUNCE_DELAY = 500; // milliseconds
const STORAGE_KEY = 'scratchpad_content';

// DOM elements
const textarea = document.getElementById('contentTextarea');
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');

// State
let debounceTimer = null;
let isSaving = false;

// Initialize: Load saved content
async function loadContent() {
  try {
    const result = await chrome.storage.local.get([STORAGE_KEY]);
    if (result[STORAGE_KEY]) {
      textarea.value = result[STORAGE_KEY];
    }
    updateStatus('ready', 'Ready');
  } catch (error) {
    console.error('Error loading content:', error);
    updateStatus('error', 'Error loading');
  }
}

// Save content to storage
async function saveContent() {
  if (isSaving) return;
  
  isSaving = true;
  updateStatus('saving', 'Saving...');
  
  try {
    const content = textarea.value;
    await chrome.storage.local.set({ [STORAGE_KEY]: content });
    
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 200));
    
    updateStatus('saved', 'Saved');
    
    // Reset status after 2 seconds
    setTimeout(() => {
      if (!isSaving) {
        updateStatus('ready', 'Ready');
      }
    }, 2000);
  } catch (error) {
    console.error('Error saving content:', error);
    updateStatus('error', 'Error saving');
  } finally {
    isSaving = false;
  }
}

// Debounced save function
function debouncedSave() {
  // Clear existing timer
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  
  // Update status to show typing
  updateStatus('ready', 'Typing...');
  
  // Set new timer
  debounceTimer = setTimeout(() => {
    saveContent();
  }, DEBOUNCE_DELAY);
}

// Update status indicator and text
function updateStatus(status, text) {
  statusIndicator.className = 'status-indicator ' + status;
  statusText.textContent = text;
}

// Event listeners
textarea.addEventListener('input', debouncedSave);
textarea.addEventListener('keydown', () => {
  if (debounceTimer) {
    updateStatus('ready', 'Typing...');
  }
});

// Manual save button
saveBtn.addEventListener('click', () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  saveContent();
});

// Clear button
clearBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all content?')) {
    textarea.value = '';
    debouncedSave();
  }
});

// Load content on page load
loadContent();

// Focus textarea on load for better UX
window.addEventListener('load', () => {
  textarea.focus();
});

