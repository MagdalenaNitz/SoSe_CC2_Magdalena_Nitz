AFRAME.registerComponent('spawn-bee-on-click', {  // Registrieren der neuen Komponente
    init: function () {               // Laden der Komponente
      const flower = this.el;         // Speichern der aktuellen Entity (Blume), auf der Komponente regisiriert ist.   
  
      flower.addEventListener('click', function () {    // Funktion wird ausgeführt, wenn Klick. Biene sichtbar
        const pos = new THREE.Vector3();                // Aufrufen der Weltposition der Blume
        flower.object3D.getWorldPosition(pos);
        const scene = flower.sceneEl;                   // Holt a-scene der Blume auf die Seite, um Biene korrekt zu positionieren
  
        const bee = document.createElement('a-entity'); // neue A-Frame-Entity, Biene
        bee.setAttribute('visible', 'true');            // Biene sichtbar
        bee.setAttribute('geometry', 'primitive: box; width: 0.001; height: 0.001; depth: 0.001');  // gibt Entity kleine Box-Geometrie. Technisch existent, aber nicht sichtbar. Aussehen dann über KindElemente
        bee.setAttribute('position', `${pos.x} ${pos.y + 0.2} ${pos.z}`); // Positionierung der Biene etwas überhalb der Blume
  
        // Gelber ovaler (in x-Richtung gestreckt) Körper
        const body = document.createElement('a-sphere');
        body.setAttribute('radius', '0.04');
        body.setAttribute('scale', '1.3 1 1'); // oval
        body.setAttribute('material', 'color: yellow; roughness: 0.4; metalness: 0.1');
        body.setAttribute('shadow', 'cast: true');
        bee.appendChild(body);

        // 3 eng anliegende senkrechte Ringe
        const ringOffsets = [-0.02, 0, 0.02];
        ringOffsets.forEach(offsetX => {
        const ring = document.createElement('a-torus');
        ring.setAttribute('radius', '0.04');
        ring.setAttribute('radius-tubular', '0.002');
        ring.setAttribute('segments-tubular', '12');
        ring.setAttribute('rotation', '0 90 0'); // senkrecht um Y-Achse
        ring.setAttribute('position', `${offsetX} 0 0`);
        ring.setAttribute('material', 'color: black');
        bee.appendChild(ring);
        });
  
        // Flügel links, halb transparent
        const wing1 = document.createElement('a-plane');
        wing1.setAttribute('width', '0.09');
        wing1.setAttribute('height', '0.03');
        wing1.setAttribute('position', '0 0 0.05');
        wing1.setAttribute('rotation', '90 90 0');  // leicht gedreht
        wing1.setAttribute('material', 'color: white; opacity: 0.7; transparent: true; side: double'); // Seiten doppelt sichtbar
        bee.appendChild(wing1);
  
        // Flügel rechts
        const wing2 = document.createElement('a-plane');
        wing2.setAttribute('width', '0.09');
        wing2.setAttribute('height', '0.03');
        wing2.setAttribute('position', '0 0 -0.05');
        wing2.setAttribute('rotation', '-90 -90 0');
        wing2.setAttribute('material', 'color: white; opacity: 0.7; transparent: true; side: double');
        bee.appendChild(wing2);
  
        // Fluganimation. 
        bee.setAttribute('animation', {
          property: 'position', // Start direkt über Blume. 
          dir: 'alternate', // Bewegung: Hin und Zurück
          dur: 2000,  // 2 Sec pro Richtung
          easing: 'easeInOutSine',  // Sanft
          loop: true, // endlos
          to: `${pos.x + (Math.random() - 0.5)} ${pos.y + 0.6 + Math.random() * 0.3} ${pos.z + (Math.random() - 0.5)}` // Ziel ist ein zufällig gesetzter Punkt etwas höher und seitlicher
        });
  
        // Nach 5 Sekunden verschwinden und löschen der Biene
        setTimeout(() => {
          if (bee.parentNode) {
            bee.parentNode.removeChild(bee);
          }
        }, 5000);
  
        scene.appendChild(bee);   // Hinzufügen der Biene zur Szene, damit sie erscheint.
      });
    }
  });
  