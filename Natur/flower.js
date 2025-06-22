AFRAME.registerComponent('flower-field', {
    init: function () {
      const scene = this.el;
      const flowerCount = 1500;
      const areaSize = 90;
  
      const pondX = 0;
      const pondZ = -5;
      const pondRadius = 3.2; // etwas größer als der sichtbare Teich
  
      const petalColors = ['#FF69B4', '#FFD700', '#FF4500', '#ADFF2F', '#DA70D6', '#87CEFA'];
  
      let placed = 0;
      while (placed < flowerCount) {
        const x = (Math.random() - 0.5) * areaSize;
        const z = (Math.random() - 0.5) * areaSize;
  
        // Abstand zum Teichzentrum berechnen
        const dx = x - pondX;
        const dz = z - pondZ;
        const distance = Math.sqrt(dx * dx + dz * dz);
  
        if (distance < pondRadius) continue; // zu nah am Teich → überspringen
  
        const y = 0.015;
        const flower = document.createElement('a-entity');
        flower.setAttribute('position', `${x} ${y} ${z}`);
  
        // Stängel
        const stem = document.createElement('a-cylinder');
        stem.setAttribute('height', '0.18');
        stem.setAttribute('radius', '0.012');
        stem.setAttribute('color', '#228B22');
        stem.setAttribute('position', '0 0.09 0');
        stem.setAttribute('shadow', 'cast: true');
        flower.appendChild(stem);
  
        // Blütenfarbe
        const color = petalColors[Math.floor(Math.random() * petalColors.length)];
  
        // Blütenblätter (senkrecht, sichtbar)
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
        placed++;
      }
    }
  });
  