var currentTabId = -1;

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (tab.active) {
    var sound = document.getElementById('bgsound');
    if (changeInfo.status == 'complete') {
      if (Math.random() * 100 < .5) {
        sound.pause();
        sound.currentTime = 0;
        sound.play();
        currentTabId = tabId;
      }
    } else {
      sound.pause();
      currentTabId = -1;
    }
  }
})

chrome.tabs.onRemoved.addListener( function (tabId, changeInfo, tab) {
  if (tabId === currentTabId) {
    var sound = document.getElementById('bgsound');
    sound.pause();
  }
})
