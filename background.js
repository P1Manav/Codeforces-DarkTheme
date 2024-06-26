chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get(['darkModeEnabled'], (result) => {
    const darkModeEnabled = !result.darkModeEnabled;
    chrome.storage.local.set({ darkModeEnabled }, () => {
      if (darkModeEnabled) {
        chrome.scripting.insertCSS({
          target: { tabId: tab.id },
          files: ["styles.css"]
        });
      } else {
        chrome.scripting.removeCSS({
          target: { tabId: tab.id },
          files: ["styles.css"]
        });
      }
    });
  });
});

//done
