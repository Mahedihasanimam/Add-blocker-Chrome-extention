document.addEventListener('DOMContentLoaded', () => {
    const startFocusButton = document.getElementById('start-focus');
    const stopFocusButton = document.getElementById('stop-focus');
    const statusMessage = document.getElementById('status-message');
  
    if (startFocusButton) {
      startFocusButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'startFocus' });
        statusMessage.textContent = 'Ad blocking is now active ✌️';
      });
    }
  
    if (stopFocusButton) {
      stopFocusButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'stopFocus' });
        statusMessage.textContent = 'Ad blocking is now inactive😥';
      });
    }
  });
  