document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

        // Hide the dark mode icon when expanding the menu
        const iconMobile = document.getElementById('theme-toggle-img--mobile');
        const iconDesktop = document.getElementById('theme-toggle-img');
        
        if (iconMobile && iconDesktop) {
          if ($target.classList.contains('is-active')) {
            if (window.innerWidth <= 1023) {
              iconMobile.style.display = 'none';
            }
          } else {
            iconMobile.style.display = 'inline-block';
          }
        }
      });
    });
  }
});

