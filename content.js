function applyDarkMode() {
  const darkModeStyles = `
    :root {
      --link: #21b0fd;
      --Visitedlink: #8ab1ff;
    }
    * {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
      background: #1a1a1a !important;
    }
    img {
      background: rgba(255, 255, 255, 0.2) !important;
    }
    .second-level-menu ul li a:link,
    .second-level-menu ul li a:visited,
    span.verdict-unsuccessful-challenge,
    span.cell-rejected,
    a:not([href]):not(.rated-user),
    a:link:not(.rated-user) {
      color: var(--link) !important;
    }
    a:visited:not(.rated-user) {
      color: var(--Visitedlink) !important;
    }
    .edu-menu-item {
      color: var(--Visitedlink) !important;
      text-decoration: none;
      cursor: pointer;
    }
    .comment-table.highlight-blue,
    .comment-table.highlight,
    .standings tr.highlighted-row td,
    table tr.highlighted-row td,
    .highlight-blue,
    .lang-chooser div[style^="background-color: #EAF4FF;"] {
      background-color: #1a1a1a !important;
    }
    .rated-user.user-admin {
      background-color: #1a1a1a !important;
      color: #FFFFFF !important;
    }
    .rated-user.user-black {
      background-color: #1a1a1a !important;
      color: #FFFFFF !important;
    }
    .user-rank .user-black {
      background-color: #1a1a1a !important;
      color: #FFFFFF !important;
    }
    a.groupName {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
    }
    a {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
    }
    .header {
      background-color: #1a1a1a !important;
    }
    span.user-legendary::first-letter,
    a.user-legendary::first-letter,
    span.user-admin,
    a.user-admin,
    span.user-black,
    a.user-black {
      color: #ffffff !important;
    }
    #usersRatingGraphPlaceholder * {
      background-color: initial !important;
      color: #ffffff !important;
    }
    
    img.enlarged {
      transform: scale(2);
    }
  `;

  let styleSheet = document.getElementById("dark-mode-styles");
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.id = "dark-mode-styles";
    styleSheet.type = "text/css";
    styleSheet.innerText = darkModeStyles;
    document.head.appendChild(styleSheet);
  }

  document.body.classList.toggle('dark-mode');

  updateImage();
}
function updateImage() {
  const header = document.getElementById('header');
  if (!header) return;

  const img = header.querySelector('img');
  if (!img) return;

  let codeforcesImgSrc = 'https://codeforces.org/s/78108/images/codeforces-sponsored-by-ton.png';
  let darkModeImgSrc = 'https://i.ibb.co/y4mtvTX/Codeforces.jpg';
  let currentSrc = img.src;
  console.log(currentSrc);
  if (currentSrc === codeforcesImgSrc){
    if (document.body.classList.contains('dark-mode')) {
      img.src = darkModeImgSrc;
    } else {
      img.src = currentSrc;
    }

    img.classList.toggle('enlarged', document.body.classList.contains('dark-mode'));
  }
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

      document.body.classList.remove('dark-mode');
      updateImage();
    }
    location.reload();
  }
});
