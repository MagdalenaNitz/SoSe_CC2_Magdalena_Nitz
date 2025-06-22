document.addEventListener('DOMContentLoaded', () => {
    const bee = document.querySelector('#bee');
    window.addEventListener('flower-clicked', () => {
      bee.setAttribute('visible', true);
    });
  });
  