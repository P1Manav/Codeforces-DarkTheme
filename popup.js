document.getElementById('toggle-dark-mode').addEventListener('click', () => {
	chrome.storage.local.get(['darkModeEnabled'], (result) => {
		const darkModeEnabled = !result.darkModeEnabled;
		chrome.storage.local.set({ darkModeEnabled }, () => {
			chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
				const tabId = tabs[0].id;
				if (darkModeEnabled) {
					chrome.scripting.insertCSS({
						target: { tabId: tabId },
						files: ["styles.css"]
					});
				} else {
					chrome.scripting.removeCSS({
						target: { tabId: tabId },
						files: ["styles.css"]
					});
				}
			});
		});
		
	});
});

//complete



//done