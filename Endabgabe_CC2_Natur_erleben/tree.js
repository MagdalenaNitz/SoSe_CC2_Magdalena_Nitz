AFRAME.registerComponent('tree-field', {    // Registrieren der neuen Komponente
    init: function () {                     // Speichern des aktuellen Elements, an das Komponente angehängt ist.   
      const scene = this.el;
      const count = 40;                     // 40 Bäume, verteilt in einem Ring mit Radius 20
      const radius = 20;
  
      const greenShades = ['#2E8B57', '#228B22', '#6B8E23', '#3CB371']; // Farben der Baumkronen
  
      for (let i = 0; i < count; i++) {     // Schleife, um Bäume zu erzeugen
        const angle = (i / count) * Math.PI * 2;  // berechnet den Winkel in einem Kreis, um die Position gleichmäßig zu verteilen
        const x = Math.cos(angle) * (radius + Math.random() * 10);  // berechnet zufällige X/Z-Position in leicht variierenden Radiusbereich
        const z = Math.sin(angle) * (radius + Math.random() * 10);
  
        const tree = document.createElement('a-entity');  // erzeugt neues a-entity als Container für Stamm und Krone. Auf Bodenhöhe gesetzt
        tree.setAttribute('position', `${x} -0.05 ${z}`);
        tree.setAttribute('rotation', `${(Math.random() - 0.5) * 4} ${Math.random() * 360} ${(Math.random() - 0.5) * 4}`);  // zufällige leichte Neigung und Drehung des Baums
  
        // Stamm
        const trunkHeight = 1.5 + Math.random() * 1.5;   // zufällige Höhe (1.5-3.0) und Dicke (0.1-0.25) für den Baumstamm
        const trunkRadius = 0.1 + Math.random() * 0.15;
        const trunk = document.createElement('a-cylinder'); // Zylinder wird erstellt, ausgerichtet, korrekt vertikal positioniert
        trunk.setAttribute('height', trunkHeight);
        trunk.setAttribute('radius', trunkRadius);
        trunk.setAttribute('position', `0 ${trunkHeight / 2} 0`);
        trunk.setAttribute('src', '#trunkTex'); // Textur
        trunk.setAttribute('material', 'shader: standard; roughness: 1; metalness: 0; side: double'); // Material
        trunk.setAttribute('shadow', 'cast: true'); // Schatten
  
        // Runde oder ovale Krone (Kugel)
        const crown = document.createElement('a-sphere'); // zufälliger Radius und Skalierung der Kugel für runde oder ovale Baumkronen
        const r = 0.8 + Math.random() * 0.6;
        const sx = 1 + Math.random() * 0.3;
        const sy = 1 + Math.random() * 0.6;
        const sz = 1 + Math.random() * 0.3;
        const scale = `${sx} ${sy} ${sz}`;  // Position der Krone auf dem Stamm basierend auf ihrer Höhe
        const yPos = trunkHeight + r * sy * 0.5;
  
        crown.setAttribute('radius', r);  // setzt Radius, Deformation (Skalierung) und Position der Krone
        crown.setAttribute('scale', scale);
        crown.setAttribute('position', `0 ${yPos} 0`);
        crown.setAttribute('color', greenShades[Math.floor(Math.random() * greenShades.length)]); // zufällige Grüntöne für die Krone
        crown.setAttribute('material', 'shader: standard; roughness: 0.8; metalness: 0; side: double');
        crown.setAttribute('shadow', 'cast: true');
  
        // Zusammensetzen und Hinzufügen des Baums zur Szene
        tree.appendChild(trunk);
        tree.appendChild(crown);
        scene.appendChild(tree);
      }
    }
  });
  