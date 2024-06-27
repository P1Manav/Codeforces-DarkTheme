function applyDarkMode() {
  const darkModeStyles = `
    :root {
      --backgroundColor: #1a1a1a;
      --fontColor: #ffffff;
      --link: #21b0fd;
      --Visitedlink: #8ab1ff;
    }

    img {
      background: rgba(255, 255, 255, 0.2) !important;
      ;
    }

    body:not(.wysiwyg),
    .roundbox,
    .bottom-links,
    .datatable td:not(.dark),
    .datatable td:not(.dark) div.dark,
    .datatable th,
    .datatable>div.dark,
    #facebox .content,
    .talk-content div[id^="history-text-content"],
    .spoiler-content,
    .roundbox.highlight-blue,
    .topic .content,
    .comment-table,
    .search,
    .ac_input,
    input[name$="Difficulty"],
    input[type="text"],
    #title,
    #comment,
    td.dark,
    td.dark div.dark,
    .ttypography tbody tr:hover td,
    .status-frame-datatable tr td.dark,
    div.ttypography tbody tr:hover th,
    a,
    #header>div:first-child img,
    ._logo_div img,
    .sidebox img[alt="Logo"],
    img[src^="//st.codeforces.com"]:not(.ajax-loading-gif),
    img[src^="//sta.codeforces.com"]:not(.ajax-loading-gif),
    img[src$="/lightning-16x16.png"],
    img[src$="/ok-16x16.png"],
    pre,
    body>pre,
    div.ttypography pre,
    .comment-table.highlight-blue,
    .comment-table.highlight,
    .standings tr.highlighted-row td,
    table tr.highlighted-row td,
    .highlight-blue,
    .lang-chooser div[style^="background-color: #EAF4FF;"],
    .standings .cell-accepted,
    .standings .cell-accepted-locked,
    .standings .cell-challenged,
    .standings .cell-passed-system-test,
    blockquote,
    div.alert-success,
    div.ttypography .tt,
    .search-help code,
    .sidebar-menu ul li,
    .sidebar-menu ul li:hover,
    .problems tr.rejected-problem td.act,
    .problems tr.accepted-problem td.act,
    .problems tr.rejected-problem td.id,
    .problems tr.accepted-problem td.id,
    div.ttypography .MathJax,
    div.ttypography a:hover,
    div.ttypography a:focus,
    table tbody tr th a img[alt^="Sort"],
    .datatable td.state[style^="background-color: rgb(221, 238, 255);"],
    .datatable td.state[style^="background-color: rgb(212, 237, 201);"],
    .miu-complete,
    .miu-comment,
    .send-talk-form table .wysiwyg,
    input[type="submit"],
    input[type="button"],
    input[type="file"],
    .CalendarPage_calendar,
    .CalendarPage_calendar iframe,
    textarea[name="input"],
    textarea[name="output"],
    select,
    button,
    input,
    #sourceCodeTextarea,
    .delete-resource-link,
    .close,
    .close_image,
    .problem-statement .test-example-line-even,
    span.error,
    .roundbox.highlight-blue .caption.titled,
    .roundbox.highlight-blue .caption.titled+div,
    .second-level-menu ul li a:link,
    .second-level-menu ul li a:visited,
    span.verdict-unsuccessful-challenge,
    span.cell-rejected,
    a:not([href]):not(.rated-user),
    a:link:not(.rated-user),
    a:visited:not(.rated-user),
    .info,
    .ttypography,
    .ttypography table,
    .ttypography h1,
    .ttypography h2,
    .ttypography h3,
    .ttypography h4,
    .ttypography h5,
    .ttypography h6,
    .right-meta,
    .tickLabel,
    .personal-sidebar,
    .roundbox,
    #footer,
    .pagination,
    #locationSelect,
    #pageContent,
    #pageContent>div:not(:first-child),
    body.notfoundpage h3,
    #facebox .content,
    .lang-chooser,
    .page-index.active,
    span#u_0_4,
    .menu-list-container ul li a,
    #header h3,
    body>p,
    body>ul,
    .datatable td.state a,
    div.setting-name,
    span.user-legendary::first-letter,
    a.user-legendary::first-letter,
    span.user-admin,
    a.user-admin,
    span.user-black,
    a.user-black,
    div.diffHtmlTarget pre.prettyprint del[style^="background:#ff8080"],
    div.diffHtmlTarget pre.prettyprint ins[style^="background:#80ff80"],
    div.diffHtmlTarget pre.prettyprint ins[style^="background:#80ff80"] .lit {
      background: var(--backgroundColor) !important;
      background-color: var(--backgroundColor) !important;
      color: var(--fontColor) !important;
    }



    table {
      border: 2px solid;
      border-color: #ffffff;
    }

    .second-level-menu-list li {
      border-radius: 5px !important;
    }

    .datatable td.state a[href$="standings"] {
      color: #8cc3f9 !important;
    }


    span.user-admin,
    a.user-admin,
    span.user-black,
    a.user-black {
      color: var(--fontColor) !important;
    }

    img.enlarged {
      transform: scale(2);
    }

    .second-level-menu ul li a:link,
    .second-level-menu ul li a:visited,
    span.verdict-unsuccessful-challenge span.cell-rejected a:not([href]):not(.rated-user),
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

    span.verdict-rejected {
      color: var(--link) !important;
    }


    span.user-violet,
    a.user-violet {
      color: #ca1cca !important;
    }

    span.user-gray,
    a.user-gray {
      color: #cccccc !important;
    }

    span.user-orange,
    a.user-orange{
      color: #ffa500 !important;
    }

    span.user-cyan,
    a.user-cyan {
      color: #66ffff !important;
    }

    span.user-legendary,
    a.user-legendary {
      color: #ff0000 !important;

    }

    span.user-blue,
    a.user-blue {
      color: #0000ff !important;

    }

    span.user-red,
    a.user-red {
      color: #ff0000 !important;
    }

    span.user-green,
    a.user-green {
      color: #00ff00 !important;
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

  let images = document.getElementsByTagName('img');

  for (let i = 0; i < images.length; i++) {
      if (images[i].src.includes('codeforces-sponsored-by-ton.png')) {
          images[i].src = 'https://i.ibb.co/y4mtvTX/Codeforces.jpg';
          img.classList.toggle('enlarged', document.body.classList.contains('dark-mode'));
          return;
      }
  }
  img.src=currentSrc;
  console.log(currentSrc);
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
