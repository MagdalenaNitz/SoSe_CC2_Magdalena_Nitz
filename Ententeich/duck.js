document.addEventListener('DOMContentLoaded', () => {
    const duck = document.querySelector('#duck');
    window.addEventListener('pond-clicked', () => {
      duck.setAttribute('visible', true);
      duck.setAttribute('animation', {
        property: 'position',
        to: '0 0.1 -1',
        dur: 4000,
        easing: 'easeInOutQuad'
      });
    });
  });
  