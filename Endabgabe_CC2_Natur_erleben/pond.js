AFRAME.registerComponent('pond', {    // Registrieren der neuen Komponente "pond"
  init: function () {                 // Laden der Komponente
    const pond = document.createElement('a-cylinder');  // neues A-Frame-Element vom Typ Zylinder
    pond.setAttribute('id', 'pond');
    pond.setAttribute('radius', '1.5'); // Radius
    pond.setAttribute('height', '0.2'); // Tiefe/Höhe
    pond.setAttribute('position', '0 -0.07 -5'); // Position leicht unter dem Boden
    pond.setAttribute('rotation', '0 0 0'); // Keine Rotation, Teich flach
    pond.setAttribute('scale', '1.7 1 1.7'); // Durchmesser/Größe Teich
    pond.setAttribute('src', '#waterTex'); // Textur
    pond.setAttribute('class', 'clickable'); //Klickfunktion
    pond.setAttribute('material', 'shader: standard; transparent: true; opacity: 0.6; roughness: 0.3; metalness: 0.1; side: double'); // Material

    pond.setAttribute('spawn-duck-on-click', ''); // hinzufügen der Komponente; lässt bei Klick Ente erscheinen


    this.el.appendChild(pond);  // Hinzufügen des Teichs
  }
});

