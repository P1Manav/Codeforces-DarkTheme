document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get(['darkModeEnabled'], (result) => {
    if (result.darkModeEnabled) {
      applyDarkMode();
    }
  });
});

function applyDarkMode() {
  const darkModeStyles = `
    body {
      background-color: #000000 !important;
      color: #ffffff !important;
    }
    a {
      color: #ffffff !important;
    }
    .header {
      background-color: #000000 !important;
    }
    /* Add more styles as needed */
  `;

  let styleSheet = document.createElement("style");
  styleSheet.id = "dark-mode-styles";
  styleSheet.type = "text/css";
  styleSheet.innerText = darkModeStyles;
  document.head.appendChild(styleSheet);
}
