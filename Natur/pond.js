// pond.js

AFRAME.registerComponent('pond', {
  init: function () {
    const pond = document.createElement('a-cylinder');
    pond.setAttribute('id', 'pond');
    pond.setAttribute('radius', '1.5');
    pond.setAttribute('height', '0.1');
    pond.setAttribute('position', '0 0.05 -5');
    pond.setAttribute('color', '#4FC3F7');
    pond.setAttribute('opacity', '0.8');
    pond.setAttribute('shader', 'flat');
    pond.setAttribute('class', 'clickable');

    // Noch keine Animation – nur klickbares Objekt
    pond.addEventListener('click', () => {
      console.log('Teich wurde angeklickt!');
      // Hier kannst du später Effekte hinzufügen
    });

    this.el.appendChild(pond);
  }
});
