document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get(['darkModeEnabled'], (result) => {
    if (result.darkModeEnabled) {
      applyDarkMode();
    }
  });
});

function applyDarkMode() {
  const darkModeStyles = `
    * {
        background-color: #000000 !important;
        color: #FFFFFF !important;
      }

      b {
        color: #FFFFFF !important;
      }

      img {
        background: #FFFFFF !important;
      }

      /* Ensure display type and reset potential conflicting styles */
      a.rated-user.user-legendary .legendary-user-first-letter {
        display: inline; /* or inline-block */
        color: white !important;
        text-shadow: none !important; /* Reset any text shadow */
      }
  
      .highlighted-row {
        color: white !important;
        background-color: black !important;
        background: black !important;
      }
      .rated-user.user-black {
        background-color: #000000 !important;
        color: #FFFFFF !important;
      }
      .user-rank .user-black {
        background-color: #000000 !important;
        color: #FFFFFF !important;
      }
      .rated-user.user-admin {
        background-color: #000000 !important;
        color: #FFFFFF !important;
      }
      .rated-user.user-black {
        background-color: #000000 !important;
        color: #FFFFFF !important;
      }
      a.groupName{
        background-color: #000000 !important;
        color: #FFFFFF !important;
      }
      .header {
        color: #FFFFFF !important;
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
