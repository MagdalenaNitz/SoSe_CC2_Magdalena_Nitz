AFRAME.registerComponent('tree-field', {
    init: function () {
      const scene = this.el;
      const count = 40;
      const radius = 20;
  
      const greenShades = ['#2E8B57', '#228B22', '#6B8E23', '#3CB371'];
  
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * (radius + Math.random() * 10);
        const z = Math.sin(angle) * (radius + Math.random() * 10);
  
        const tree = document.createElement('a-entity');
        tree.setAttribute('position', `${x} -0.05 ${z}`);
        tree.setAttribute('rotation', `${(Math.random() - 0.5) * 4} ${Math.random() * 360} ${(Math.random() - 0.5) * 4}`);
  
        // Stamm
        const trunkHeight = 1.5 + Math.random() * 1.5;
        const trunkRadius = 0.1 + Math.random() * 0.15;
        const trunk = document.createElement('a-cylinder');
        trunk.setAttribute('height', trunkHeight);
        trunk.setAttribute('radius', trunkRadius);
        trunk.setAttribute('position', `0 ${trunkHeight / 2} 0`);
        trunk.setAttribute('color', '#5C3A21');
        trunk.setAttribute('material', 'shader: standard; roughness: 1; metalness: 0; side: double');
        trunk.setAttribute('shadow', 'cast: true');
  
        // Runde oder ovale Krone (Kugel)
        const crown = document.createElement('a-sphere');
        const r = 0.8 + Math.random() * 0.6;
        const sx = 1 + Math.random() * 0.3;
        const sy = 1 + Math.random() * 0.6;
        const sz = 1 + Math.random() * 0.3;
        const scale = `${sx} ${sy} ${sz}`;
        const yPos = trunkHeight + r * sy * 0.5;
  
        crown.setAttribute('radius', r);
        crown.setAttribute('scale', scale);
        crown.setAttribute('position', `0 ${yPos} 0`);
        crown.setAttribute('color', greenShades[Math.floor(Math.random() * greenShades.length)]);
        crown.setAttribute('material', 'shader: standard; roughness: 0.8; metalness: 0; side: double');
        crown.setAttribute('shadow', 'cast: true');
  
        tree.appendChild(trunk);
        tree.appendChild(crown);
        scene.appendChild(tree);
      }
    }
  });
  