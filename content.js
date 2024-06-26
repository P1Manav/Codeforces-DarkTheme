
function applyDarkMode() {
  const darkModeStyles = `
    
    :root{
      --genericLinkBlueColor: #21b0fd;
      --genericLinkVisitedBlueColor: #8ab1ff;
    }
    * {
      background-color: #000000 !important;
      color: #ffffff !important;
      background: #000000 !important;
    }

    img {
      background: rgba(255, 255, 255, 0.2) !important;

    }


    .second-level-menu ul li a:link,
    .second-level-menu ul li a:visited,
    span.verdict-unsuccessful-challenge 
    span.cell-rejected 
    a:not([href]):not(.rated-user),
    a:link:not(.rated-user) {
        color: var(--genericLinkBlueColor) !important;
    }

    a:visited:not(.rated-user) {
        color: var(--genericLinkVisitedBlueColor) !important;
    }

    .edu-menu-item {
      color: var(--genericLinkVisitedBlueColor) !important;
      text-decoration: none;
      cursor: pointer;
    }

    .comment-table.highlight-blue,
    .comment-table.highlight,
    .standings tr.highlighted-row td,
    table tr.highlighted-row td,
    .highlight-blue,
    .lang-chooser div[style^="background-color: #EAF4FF;"] {
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
    .user-rank .user-black {
      background-color: #000000 !important;
      color: #FFFFFF !important;
    }
    a.groupName {
      background-color: #000000 !important;
      color: #ffffff !important;
    }
    a {
      background-color: #000000 !important;
      color: #ffffff !important;
    }


    .header {
      background-color: #000000 !important;
    }
    span.user-legendary::first-letter,
    a.user-legendary::first-letter,
    span.user-admin,
    a.user-admin,
    span.user-black,
    a.user-black {
        color: #fff !important;
    }

    #usersRatingGraphPlaceholder * {
      background-color: initial !important;
      color: #ffffff !important;
    }

    #usersRatingGraphPlaceholder img {
      background: initial !important;
    }

    #usersRatingGraphPlaceholder .rated-user.user-gray {
      color: #ffffff !important;
    }

    #usersRatingGraphPlaceholder .rated-user.user-admin {
      background-color: initial !important;
      color: #ffffff !important;
    }

    #usersRatingGraphPlaceholder a {
      color: #ffffff !important;
    }

    #usersRatingGraphPlaceholder .header {
      background-color: initial !important;
    }

    #usersRatingGraphPlaceholder .legendary-user-first-letter:first-letter {
      color: #ffffff !important;
    }

  `;

  let styleSheet = document.createElement("style");
  styleSheet.id = "dark-mode-styles";
  styleSheet.type = "text/css";
  styleSheet.innerText = darkModeStyles;
  document.head.appendChild(styleSheet);
}

chrome.storage.local.get(['darkModeEnabled'], (result) => {
  if (result.darkModeEnabled) {
    applyDarkMode();
  }
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.darkModeEnabled) {
    if (changes.darkModeEnabled.newValue) {
      applyDarkMode();
    } else {
      let styleSheet = document.getElementById("dark-mode-styles");
      if (styleSheet) {
        styleSheet.remove();
      }
    }
  }
});

//done
