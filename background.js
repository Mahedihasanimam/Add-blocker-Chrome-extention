const blockedSites = ['*://*.youtube.com/*'];
let blockingEnabled = false;

function updateRules(action) {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: action === 'startFocus' ? [{
      id: 1,
      priority: 1,
      action: { type: 'block' },
      condition: {
        urlFilter: '|https://*.youtube.com/*',
        resourceTypes: ['main_frame']
      }
    }] : []
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startFocus') {
    blockingEnabled = true;
    updateRules('startFocus');
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png', // Use a 128x128px icon
      title: 'Ad Blocker Activated',
      message: 'Ads are now being blocked on YouTube.',
      priority: 2
    });
  } else if (request.action === 'stopFocus') {
    blockingEnabled = false;
    updateRules('stopFocus');
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Ad Blocker Deactivated',
      message: 'Ads will no longer be blocked on YouTube.',
      priority: 2
    });
  }
});
