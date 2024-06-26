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
        background: rgba(255, 255, 255, 0.2) !important;
      }
      /* TEXT COLOR CHANGES */

      /* always write most specific selector first in a chain of selectors
      if they aren't mutually exclusive */
      .second-level-menu ul li a:link,
      .second-level-menu ul li a:visited,
      span.verdict-unsuccessful-challenge /* unsuccessful hacking attempt */,
      span.cell-rejected /* rejected indicator on contests' standings */,
      a:not([href]):not(.rated-user),
      a:link:not(.rated-user) {
          color: var(--genericLinkBlueColor) !important;
      }

      /* all visited anchor elements  */
      a:visited:not(.rated-user) {
          color: var(--genericLinkVisitedBlueColor) !important;
      }

      span.user-legendary::first-letter,
      a.user-legendary::first-letter,
      span.user-admin,
      a.user-admin,
      span.user-black,
      a.user-black {
          color: #fff !important;
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
