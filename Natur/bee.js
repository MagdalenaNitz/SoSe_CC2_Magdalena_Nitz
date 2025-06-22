AFRAME.registerComponent('spawn-bee-on-click', {
    init: function () {
      const flower = this.el;
  
      flower.addEventListener('click', function () {
        console.log('Blume geklickt, Biene wird erzeugt.');
  
        // Weltposition der Blume ermitteln
        const pos = new THREE.Vector3();
        flower.object3D.getWorldPosition(pos);
        console.log('Blume Weltposition:', pos);
  
        const scene = flower.sceneEl;
  
        // 🐝 Bienen-Container
        const bee = document.createElement('a-entity');
        bee.setAttribute('visible', 'true');
  
        // ✅ Mini-Box-Geometrie, damit das Entity sichtbar & animierbar ist
        bee.setAttribute('geometry', 'primitive: box; width: 0.001; height: 0.001; depth: 0.001');
        bee.setAttribute('position', `${pos.x} ${pos.y + 0.2} ${pos.z}`);
  
        // 🟡 Körper
        const body = document.createElement('a-sphere');
        body.setAttribute('radius', '0.05');
        body.setAttribute('material', 'color: yellow; roughness: 0.4; metalness: 0.1');
        body.setAttribute('shadow', 'cast: true');
        bee.appendChild(body);
  
        // 🤍 Flügel 1
        const wing1 = document.createElement('a-plane');
        wing1.setAttribute('width', '0.06');
        wing1.setAttribute('height', '0.03');
        wing1.setAttribute('position', '0.03 0.03 0');
        wing1.setAttribute('rotation', '0 0 45');
        wing1.setAttribute('material', 'color: white; opacity: 0.5; transparent: true; side: double');
        bee.appendChild(wing1);
  
        // 🤍 Flügel 2
        const wing2 = document.createElement('a-plane');
        wing2.setAttribute('width', '0.06');
        wing2.setAttribute('height', '0.03');
        wing2.setAttribute('position', '-0.03 0.03 0');
        wing2.setAttribute('rotation', '0 0 -45');
        wing2.setAttribute('material', 'color: white; opacity: 0.5; transparent: true; side: double');
        bee.appendChild(wing2);
  
        // ✨ Fluganimation
        bee.setAttribute('animation', {
          property: 'position',
          dir: 'alternate',
          dur: 2000,
          easing: 'easeInOutSine',
          loop: true,
          to: `${pos.x + (Math.random() - 0.5)} ${pos.y + 0.6 + Math.random() * 0.3} ${pos.z + (Math.random() - 0.5)}`
        });
  
        scene.appendChild(bee);
      });
    }
  });
  