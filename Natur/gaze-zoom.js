AFRAME.registerComponent('gaze-zoom', {
    schema: {
      speed: { type: 'number', default: 1.5 } // Abstand, den man näher kommt
    },
    init: function () {
      this.el.addEventListener('click', () => {
        const camera = document.querySelector('[camera]');
        if (!camera) return;
  
        // Kameraposition und Zielposition holen
        const camPos = new THREE.Vector3();
        camera.object3D.getWorldPosition(camPos);
  
        const targetPos = new THREE.Vector3();
        this.el.object3D.getWorldPosition(targetPos);
  
        // Richtung und neue Position berechnen
        const direction = new THREE.Vector3().subVectors(targetPos, camPos).normalize();
        const newPos = camPos.clone().add(direction.multiplyScalar(this.data.speed));
  
        // Zoom-Animation
        camera.setAttribute('animation__zoom', {
          property: 'position',
          to: `${newPos.x} ${newPos.y} ${newPos.z}`,
          dur: 1000,
          easing: 'easeInOutQuad'
        });
      });
    }
  });