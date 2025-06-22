document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
  
    function createFlower(x, z) {
      const stemHeight = 0.6;
  
      // Stiel
      const stem = document.createElement('a-cylinder');
      stem.setAttribute('height', stemHeight);
      stem.setAttribute('radius', 0.02);
      stem.setAttribute('color', '#4CAF50');
      stem.setAttribute('position', `${x} ${stemHeight / 2} ${z}`);
      scene.appendChild(stem);
  
      // Blütenkopf
      const flowerHead = document.createElement('a-entity');
      flowerHead.setAttribute('position', `${x} ${stemHeight} ${z}`);
      flowerHead.setAttribute('id', 'flower');
      flowerHead.classList.add('clickable');
  
      const center = document.createElement('a-sphere');
      center.setAttribute('radius', 0.05);
      center.setAttribute('color', 'yellow');
      flowerHead.appendChild(center);
  
      const petals = [
        { x: 0.1, z: 0 },
        { x: -0.1, z: 0 },
        { x: 0, z: 0.1 },
        { x: 0, z: -0.1 },
        { x: 0.07, z: 0.07 }
      ];
  
      petals.forEach(pos => {
        const petal = document.createElement('a-circle');
        petal.setAttribute('radius', 0.08);
        petal.setAttribute('color', 'pink');
        petal.setAttribute('rotation', '90 0 0');
        petal.setAttribute('position', `${pos.x} 0 ${pos.z}`);
        flowerHead.appendChild(petal);
      });
  
      scene.appendChild(flowerHead);
    }
  
    // Beispiel: drei Blumen
    createFlower(2, -4);
    createFlower(-1, -3.5);
    createFlower(0.5, -5.5);
  });
  