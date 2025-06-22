AFRAME.registerComponent('pond', {
  init: function () {
    const pond = document.createElement('a-cylinder');
    pond.setAttribute('id', 'pond');
    pond.setAttribute('radius', '1.5');
    pond.setAttribute('height', '0.2');              // Tiefe des Teichs
    pond.setAttribute('position', '0 0 -5');         // Oberkante bündig mit Boden
    pond.setAttribute('rotation', '0 0 0');
    pond.setAttribute('class', 'clickable');
    pond.setAttribute('src', '#waterTex');
    pond.setAttribute('material', 'shader: standard; transparent: true; opacity: 0.6; metalness: 0.1; roughness: 0.3; side: double;');

    this.el.appendChild(pond);
  }
});
