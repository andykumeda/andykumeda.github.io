---
---

/* 
Copied from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/

let systemInitiatedDark = window.matchMedia('(prefers-color-scheme: dark)');
let theme = sessionStorage.getItem('theme');

const iconSun = '{{ site.baseurl }}/assets/img/sun.svg';
const iconMoon = '{{ site.baseurl }}/assets/img/moon.svg';

function changeIconImgSrc(theme) {
  const iconElement = document.getElementById('theme-toggle-img');
  const iconMobileElement = document.getElementById('theme-toggle-img--mobile');
  let iconSrc = '';

  if (theme === 'dark') {
    iconSrc = iconSun;
  } else {
    iconSrc = iconMoon;
  }

  if (iconElement !== null) {
    iconElement.src = iconSrc;
  }

  if (iconMobileElement !== null) {
    iconMobileElement.src = iconSrc;
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  sessionStorage.setItem('theme', theme);
  changeIconImgSrc(theme);
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    if (theme === 'light' || theme === null) {
      setTheme('dark');
    }
  } else {
    if (theme === 'dark' || theme === null) {
      setTheme('light');
    }
  }
}

if (theme === 'dark' || theme === null) {
  setTheme('dark');
} else if (theme === 'light') {
  setTheme('light');
}

systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
});

window.addEventListener('load', () => {
  let currentTheme = sessionStorage.getItem('theme');
  if (currentTheme === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

window.addEventListener('pageshow', (event) => {
  let currentTheme = sessionStorage.getItem('theme');
  if (currentTheme === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

