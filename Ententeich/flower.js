document.addEventListener('DOMContentLoaded', () => {
    const flower = document.querySelector('#flower');
    if (flower) {
      flower.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('flower-clicked'));
      });
    }
  });
  