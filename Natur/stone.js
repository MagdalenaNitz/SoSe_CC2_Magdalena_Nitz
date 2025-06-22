document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
  
    const stoneCount = 55
;
    const radius = 3;
    const centerX = 0;
    const centerZ = -5;
  
    for (let i = 0; i < stoneCount; i++) {
      const angle = (i / stoneCount) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const z = centerZ + Math.sin(angle) * radius;
  
      // Unterschiedliche Größen: von sehr klein bis mittelgroß
      const base = 0.08 + Math.random() * 0.14; // 0.08–0.22
      const heightFactor = 0.5 + Math.random() * 0.6; // 0.5–1.1
  
      const yPos = (base * heightFactor) / 2 - 0.015;
  
      const stone = document.createElement('a-sphere');
      stone.setAttribute('position', `${x} ${yPos} ${z}`);
      stone.setAttribute('scale', `${base} ${base * heightFactor} ${base}`);
      stone.setAttribute('src', '#stoneTex');
      stone.setAttribute('material', 'roughness: 1; metalness: 0; shader: standard;');
      stone.setAttribute('shadow', 'cast: true');
  
      scene.appendChild(stone);
    }

    // Zusätzliche 5 Steine im Teichinneren
    const innerStoneCount = 5;
    const innerRadius = 1.8;

    for (let i = 0; i < innerStoneCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * innerRadius;
        const x = centerX + Math.cos(angle) * dist;
        const z = centerZ + Math.sin(angle) * dist;

        const base = 0.1 + Math.random() * 0.15;
        const heightFactor = 0.4 + Math.random() * 0.7;
        const yPos = (base * heightFactor) / 2 - 0.02;

        const innerStone = document.createElement('a-sphere');
        innerStone.setAttribute('position', `${x} ${yPos} ${z}`);
        innerStone.setAttribute('scale', `${base} ${base * heightFactor} ${base}`);
        innerStone.setAttribute('src', '#stoneTex');
        innerStone.setAttribute('material', 'roughness: 1; metalness: 0; shader: standard;');
        innerStone.setAttribute('shadow', 'cast: true');

        scene.appendChild(innerStone);
    }
  });
  