document.addEventListener('DOMContentLoaded', () => {
    const camera = document.querySelector('#camera');
    window.addEventListener('flower-clicked', () => {
      camera.setAttribute('animation', {
        property: 'position',
        to: '2 1.6 -3',
        dur: 1500,
        easing: 'easeInOutSine'
      });
    });
  });
  