function hideAds() {
    const adElements = document.querySelectorAll('.ytp-ad-module, .video-ads, .ytp-ad-overlay-container');
    if (adElements.length > 0) {
      adElements.forEach(el => el.style.display = 'none');
    }
  }
  
  window.addEventListener('load', hideAds);
  setInterval(hideAds, 5000);
  