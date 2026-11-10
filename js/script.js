document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.navbar-toggler');
  const drawer = document.getElementById('navbarNavMenu');
  const closeButton = drawer?.querySelector('.btn-close');

  if (!toggleButton || !drawer || !closeButton) {
    return;
  }

  toggleButton.addEventListener('click', () => {
    if (!drawer.open) {
      drawer.showModal();
      toggleButton.setAttribute('aria-expanded', 'true');
    }
  });

  closeButton.addEventListener('click', () => drawer.close());

  drawer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => drawer.close());
  });

  drawer.addEventListener('click', event => {
    if (event.target === drawer) {
      drawer.close();
    }
  });

  drawer.addEventListener('close', () => {
    toggleButton.setAttribute('aria-expanded', 'false');
  });
});
