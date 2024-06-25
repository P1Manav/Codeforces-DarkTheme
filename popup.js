document.getElementById('toggle-dark-mode').addEventListener('click', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	  chrome.scripting.executeScript({
		target: { tabId: tabs[0].id },
		function: toggleDarkMode
	  });
	});
  });
  
  function toggleDarkMode() {
	const darkModeStyles = `
	  	*{
			color: #FFFFFF !important;
			background-color: #000000 !important;
		}

		b {
			color: #FFFFFF !important;
		}


		.legendary-user-first-letter {
			background-color: #000000 !important;
			color: #FFFFFF !important;
		}

		.rated-user.user-admin {
			background-color: #000000 !important;
			color: #FFFFFF !important;
		}

		.header {
			color: #FFFFFF !important;
			background-color: #000000 !important;
		}
	  /* Add more styles as needed */
	`;
	
	const styleSheetId = "dark-mode-styles";
  
	let styleSheet = document.getElementById(styleSheetId);
	if (styleSheet) {
	  styleSheet.remove();
	  chrome.storage.local.set({ darkModeEnabled: false });
	} else {
	  styleSheet = document.createElement("style");
	  styleSheet.id = styleSheetId;
	  styleSheet.type = "text/css";
	  styleSheet.innerText = darkModeStyles;
	  document.head.appendChild(styleSheet);
	  chrome.storage.local.set({ darkModeEnabled: true });
	}
  }
  
  chrome.storage.local.get(['darkModeEnabled'], (result) => {
	if (result.darkModeEnabled) {
	  const darkModeStyles = `
		*{
			color: #FFFFFF !important;
			background-color: #000000 !important;
		}

		b {
			color: #FFFFFF !important;
		}


		.legendary-user-first-letter {
			background-color: #000000 !important;
			color: #FFFFFF !important;
		}

		.rated-user.user-admin {
			background-color: #000000 !important;
			color: #FFFFFF !important;
		}

		.header {
		color: #FFFFFF !important;
		background-color: #000000 !important;
		}
		/* Add more styles as needed */
	  `;
  
	  const styleSheet = document.createElement("style");
	  styleSheet.id = "dark-mode-styles";
	  styleSheet.type = "text/css";
	  styleSheet.innerText = darkModeStyles;
	  document.head.appendChild(styleSheet);
	}
  });
  