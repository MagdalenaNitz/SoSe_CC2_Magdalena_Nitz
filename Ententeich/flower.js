document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
      flower.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('flower-clicked'));
      });
    });
  });
  