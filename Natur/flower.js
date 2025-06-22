/* global AFRAME, THREE*/
AFRAME.registerComponent('flower-field', {
    init: function () {
      const scene = this.el;
      const totalFlowers = 3000;
      const randomFlowers = 1500;
      const bedFlowers = totalFlowers - randomFlowers;
  
      const areaSize = 90;
      const pondX = 0;
      const pondZ = -5;
      const pondRadius = 3.2;
  
      const petalColors = ['#FF69B4', '#FFD700', '#FF4500', '#ADFF2F', '#DA70D6', '#87CEFA'];
  
      // 1. Zufällig verteilte Blumen (außerhalb des Teichs)
      let placed = 0;
      while (placed < randomFlowers) {
        const x = (Math.random() - 0.5) * areaSize;
        const z = (Math.random() - 0.5) * areaSize;
        const dx = x - pondX;
        const dz = z - pondZ;
        const distance = Math.sqrt(dx * dx + dz * dz);
        if (distance < pondRadius) continue;
  
        createFlower(scene, x, 0.015, z, petalColors);
        placed++;
      }
  
      // 2. Zentriertes Blumenbeet um den Teich
      const bedFlowerCount = 150;

      for (let i = 0; i < bedFlowerCount; i++) {
        // Position zufällig im Umkreis um den Teich
        const angle = Math.random() * Math.PI * 2;
        const distance = pondRadius + 0.07 + Math.random() * 0.9;
        const jitterX = (Math.random() - 0.5) * 0.4;
        const jitterZ = (Math.random() - 0.5) * 0.4;
      
        const x = pondX + Math.cos(angle) * distance + jitterX;
        const z = pondZ + Math.sin(angle) * distance + jitterZ;
      
        // Bereich vor dem Teich (z. B. Richtung -Z) aussparen
        const forwardAngle = -Math.PI / 2;
        const angleDiff = Math.abs(angle - forwardAngle);
        if (angleDiff < Math.PI / 4) continue;
      
        createFlower(scene, x, 0.015, z, petalColors);
      }
      
  
      //Erzeugen einer Blume
      function createFlower(scene, x, y, z, colors) {
        const flower = document.createElement('a-entity');
        flower.setAttribute('position', `${x} ${y} ${z}`);
    
        // Klickbarer Collider – macht nur die Blume anklickbar
        const collider = document.createElement('a-sphere');
        collider.setAttribute('radius', '0.15');
        collider.setAttribute('material', 'opacity: 0; transparent: true');
        collider.setAttribute('class', 'clickable');
        collider.setAttribute('position', '0 0.15 0');
        collider.setAttribute('spawn-bee-on-click', '');
        flower.appendChild(collider);

  
        const stem = document.createElement('a-cylinder');
        stem.setAttribute('height', '0.18');
        stem.setAttribute('radius', '0.012');
        stem.setAttribute('color', '#228B22');
        stem.setAttribute('position', '0 0.09 0');
        stem.setAttribute('shadow', 'cast: true');
        flower.appendChild(stem);
  
        const color = colors[Math.floor(Math.random() * colors.length)];
  
        for (let j = 0; j < 5; j++) {
          const angle = (j / 5) * Math.PI * 2;
          const px = Math.cos(angle) * 0.045;
          const pz = Math.sin(angle) * 0.045;
          const rotationY = (angle * 180) / Math.PI;
  
          const petal = document.createElement('a-sphere');
          petal.setAttribute('radius', '0.04');
          petal.setAttribute('color', color);
          petal.setAttribute('position', `${px} 0.18 ${pz}`);
          petal.setAttribute('rotation', `75 ${rotationY} 0`);
          petal.setAttribute('shadow', 'cast: true');
          flower.appendChild(petal);
        }
  
        scene.appendChild(flower);
      }
    }
  });
  