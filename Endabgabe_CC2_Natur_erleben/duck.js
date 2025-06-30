AFRAME.registerComponent('spawn-duck-on-click', {       // Registrieren der neuen Komponente
  init: function () {                                   // Laden der Komponente
    this.el.addEventListener('click', () => {           // Funktion wird ausgeführt, wenn Klick. Ente sichtbar
      const scene = this.el.sceneEl;                    // Zugriff auf gesamte Seite
      const pos = new THREE.Vector3();                  // Berechnung der Weltposition des geklickten Objekts
      this.el.object3D.getWorldPosition(pos);

      // Zufällige Startposition im Teichbereich
      const startX = pos.x + (Math.random() - 0.5);     // Enten starten leicht versetzt
      const startZ = pos.z + (Math.random() - 0.5);
      const startY = pos.y + 0.1;                       // leichte Anhebung, damit Enten nicht verschwinden

      const duck = document.createElement('a-entity');  // Erzeugung neuer Ente
      duck.setAttribute('position', `${startX} ${startY} ${startZ}`); // Erstellung von neuem A-Frame-Entity für Startposition der Ente

      // Körper. Gelbe Kugel, leicht gestaucht
      const body = document.createElement('a-sphere');
      body.setAttribute('radius', '0.12');
      body.setAttribute('scale', '1 0.8 1.4');
      body.setAttribute('material', 'color: yellow');
      duck.appendChild(body);

      // Kopf. Kleiner gelber Kopf über dem Körper
      const head = document.createElement('a-sphere');
      head.setAttribute('radius', '0.06');
      head.setAttribute('position', '0 0.12 0.1');
      head.setAttribute('material', 'color: yellow');
      duck.appendChild(head);

      // Schnabel. Kleiner orangener Kegel, nach vorne gerichtet.
      const beak = document.createElement('a-cone');
      beak.setAttribute('radius-bottom', '0.015');
      beak.setAttribute('radius-top', '0.005');
      beak.setAttribute('height', '0.04');
      beak.setAttribute('rotation', '90 0 0');
      beak.setAttribute('position', '0 0.12 0.17');
      beak.setAttribute('material', 'color: orange');
      duck.appendChild(beak);

      // Flügel links & rechts. 2 seitliche, leicht abgeflachte gelbe Kugeln.
      ['-0.09 0.05 0', '0.09 0.05 0'].forEach(pos => {
        const wing = document.createElement('a-sphere');
        wing.setAttribute('radius', '0.05');
        wing.setAttribute('scale', '1 0.3 1.2');
        wing.setAttribute('position', pos);
        wing.setAttribute('material', 'color: yellow');
        duck.appendChild(wing);
      });

      // Füße links & rechts. 2 orangefarbene Quader unter dem Körper.
      ['-0.03 -0.08 0.05', '0.03 -0.08 0.05'].forEach(pos => {
        const foot = document.createElement('a-box');
        foot.setAttribute('depth', '0.01');
        foot.setAttribute('height', '0.01');
        foot.setAttribute('width', '0.03');
        foot.setAttribute('position', pos);
        foot.setAttribute('material', 'color: orange');
        duck.appendChild(foot);
      });

      // Zielpunkt zufällig im Teichbereich
      const targetX = startX + (Math.random() - 0.5) * 4; // Ziel leigt zufällig in einem 4x4 Meter großen Bereich um den Startpunkt.
      const targetZ = startZ + (Math.random() - 0.5) * 4;

      // Bewegungsverhalten 
      const modes = ['swim', 'fly', 'waddle'];
      const mode = modes[Math.floor(Math.random() * modes.length)]; // Zufällig eines der drei Bewegungsmuster auswählen.

      if (mode === 'swim') {
        // Wenn Modus swimm, dann 3 Sec. Vorwärtsschwimmen
        duck.setAttribute('animation__swim', {
          property: 'position',
          to: `${targetX} ${startY} ${targetZ}`,
          dur: 3000,
          easing: 'linear'
        });

        // Drehung nach 3 Sekunden um 180 Grad (Rückweg)
        setTimeout(() => {
          duck.setAttribute('animation__turn', {
            property: 'rotation',
            to: '0 180 0',
            dur: 800,
            easing: 'easeInOutSine'
          });
        }, 3000);

        // Zurückschwimmen nach 4 Sekunden
        setTimeout(() => {
          duck.setAttribute('animation__returnswim', {
            property: 'position',
            to: `${startX} ${startY} ${startZ}`,
            dur: 3000,
            easing: 'linear'
          });
        }, 4000);

        // Wenn Modus fly, dann fliegt Ente 2 Einheiten über dem Boden zum Ziel.
      } else if (mode === 'fly') {
        duck.setAttribute('animation__fly', {
          property: 'position',
          to: `${targetX} ${startY + 2} ${targetZ}`,
          dur: 3000,
          easing: 'easeInOutSine'
        });
        // Während Flug drehen
        duck.setAttribute('animation__spin', {
          property: 'rotation',
          to: '0 360 0',
          dur: 3000,
          loop: true
        });

        // Wenn Mouds waddle, dann watschelt Ente hin und her. Position ändert sich abwechselnd
      } else if (mode === 'waddle') {
        duck.setAttribute('animation__waddle', {
          property: 'position',
          to: `${targetX} ${startY} ${targetZ}`,
          dur: 3000,
          easing: 'easeInOutQuad',
          loop: true,
          dir: 'alternate'
        });
      }

      // Nach 7 Sekunden: Rückkehr zur Startposition
      setTimeout(() => {
        duck.setAttribute('animation__return', {
          property: 'position',
          to: `${startX} ${startY} ${startZ}`,
          dur: 1200,
          easing: 'easeInOutSine'
        });

        // Entfernen der Ente
        setTimeout(() => {
          if (duck.parentNode) {
            duck.parentNode.removeChild(duck);
          }
        }, 1300);
      }, 7000);

      scene.appendChild(duck);        // Hinzufügen der Ente zur Szene, damit sie erscheint.
    });
  }
});