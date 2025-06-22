document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
  
    const stoneCount = 36;
    const radius = 1.7;
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
  });
  