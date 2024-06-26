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

      .legendary-user-first-letter span{
        color: #FFFFFF !important;
        background-color: #000000 !important;
      }
      .user-rank .user-black{
        background: #FFFFFF !important;
        color: #FFFFFF !important;
        background-color: #000000 !important;
      }
      .rated-user.user-admin {
        background-color: #000000 !important;
        color: #FFFFFF !important;
      }
      .rated-user.user-black {
        background-color: #000000 !important;
        color: #FFFFFF !important;
      }

      .rated-user.user-gray {
        color: #FF0000 !important;
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
