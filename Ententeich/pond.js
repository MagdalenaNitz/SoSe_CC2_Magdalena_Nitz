document.addEventListener('DOMContentLoaded', () => {
    const pond = document.querySelector('#pond');
    pond.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('pond-clicked'));
    });
  });
  