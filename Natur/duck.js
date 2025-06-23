AFRAME.registerComponent('spawn-duck-on-click', {
    init: function () {
      this.el.addEventListener('click', () => {
        const scene = this.el.sceneEl;
        const pos = new THREE.Vector3();
        this.el.object3D.getWorldPosition(pos);
  
        const duck = document.createElement('a-entity');
        duck.setAttribute('position', `${pos.x + (Math.random() - 0.5)} ${pos.y + 0.1} ${pos.z + (Math.random() - 0.5)}`);
  
        // 🟡 Körper
        const body = document.createElement('a-sphere');
        body.setAttribute('radius', '0.12');
        body.setAttribute('scale', '1 0.8 1.4');
        body.setAttribute('material', 'color: yellow');
        duck.appendChild(body);
  
        // 🟡 Kopf
        const head = document.createElement('a-sphere');
        head.setAttribute('radius', '0.06');
        head.setAttribute('position', '0 0.12 0.1');
        head.setAttribute('material', 'color: yellow');
        duck.appendChild(head);
  
        // 🟠 Schnabel
        const beak = document.createElement('a-cone');
        beak.setAttribute('radius-bottom', '0.015');
        beak.setAttribute('radius-top', '0.005');
        beak.setAttribute('height', '0.04');
        beak.setAttribute('rotation', '90 0 0');
        beak.setAttribute('position', '0 0.12 0.17');
        beak.setAttribute('material', 'color: orange');
        duck.appendChild(beak);
  
        // 🤍 Flügel links
        const wingL = document.createElement('a-sphere');
        wingL.setAttribute('radius', '0.05');
        wingL.setAttribute('scale', '1 0.3 1.2');
        wingL.setAttribute('position', '-0.09 0.05 0');
        wingL.setAttribute('material', 'color: yellow');
        duck.appendChild(wingL);
  
        // 🤍 Flügel rechts
        const wingR = document.createElement('a-sphere');
        wingR.setAttribute('radius', '0.05');
        wingR.setAttribute('scale', '1 0.3 1.2');
        wingR.setAttribute('position', '0.09 0.05 0');
        wingR.setAttribute('material', 'color: yellow');
        duck.appendChild(wingR);
  
        // 🟤 Füße
        const footL = document.createElement('a-box');
        footL.setAttribute('depth', '0.01');
        footL.setAttribute('height', '0.01');
        footL.setAttribute('width', '0.03');
        footL.setAttribute('position', '-0.03 -0.08 0.05');
        footL.setAttribute('material', 'color: orange');
        duck.appendChild(footL);
  
        const footR = document.createElement('a-box');
        footR.setAttribute('depth', '0.01');
        footR.setAttribute('height', '0.01');
        footR.setAttribute('width', '0.03');
        footR.setAttribute('position', '0.03 -0.08 0.05');
        footR.setAttribute('material', 'color: orange');
        duck.appendChild(footR);
  
        // 🌀 Zufällige Animation
        const modes = ['swim', 'fly', 'waddle'];
        const mode = modes[Math.floor(Math.random() * modes.length)];
  
        if (mode === 'swim') {
          duck.setAttribute('animation__swim', {
            property: 'position',
            to: `${pos.x + 1} ${pos.y + 0.1} ${pos.z}`,
            dur: 4000,
            easing: 'linear',
            loop: true,
            dir: 'alternate'
          });
        } else if (mode === 'fly') {
          duck.setAttribute('animation__fly', {
            property: 'position',
            to: `${pos.x + 2} ${pos.y + 2} ${pos.z + 1}`,
            dur: 3000,
            easing: 'easeInOutSine'
          });
          duck.setAttribute('animation__rotate', {
            property: 'rotation',
            to: '0 360 0',
            dur: 3000,
            loop: true
          });
        } else if (mode === 'waddle') {
          duck.setAttribute('animation__waddle', {
            property: 'position',
            to: `${pos.x} ${pos.y + 0.1} ${pos.z + 1}`,
            dur: 3000,
            easing: 'easeInOutQuad',
            loop: true,
            dir: 'alternate'
          });
        }
  
        // ⏳ Nach 8 Sekunden entfernen
        setTimeout(() => {
          if (duck.parentNode) {
            duck.parentNode.removeChild(duck);
          }
        }, 8000);
  
        scene.appendChild(duck);
      });
    }
  });
  