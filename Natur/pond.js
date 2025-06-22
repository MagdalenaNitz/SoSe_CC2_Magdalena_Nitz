AFRAME.registerComponent('pond', {
  init: function () {
    const pond = document.createElement('a-cylinder');
    pond.setAttribute('id', 'pond');
    pond.setAttribute('radius', '1.5');
    pond.setAttribute('height', '0.2'); // Tiefe
    pond.setAttribute('position', '0 -0.07 -5');
    pond.setAttribute('rotation', '0 0 0');
    pond.setAttribute('scale', '1.7 1 1.7'); // Durchmesser/Größe Teich
    pond.setAttribute('src', '#waterTex');
    pond.setAttribute('class', 'clickable');
    pond.setAttribute('material', 'shader: standard; transparent: true; opacity: 0.6; roughness: 0.3; metalness: 0.1; side: double');

    this.el.appendChild(pond);
  }
});

