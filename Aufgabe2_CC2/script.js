AFRAME.registerComponent('generate-flowers', {
    init: function () {
      for (let i = 0; i < 50; i++) {
        const flower = document.createElement('a-entity');
  
        flower.setAttribute('geometry', {
          primitive: 'cylinder',
          height: 0.2,
          radius: 0.05
        });
  
        flower.setAttribute('material', {
          color: '#FF69B4'
        });
  
        flower.setAttribute('position', {
          x: (Math.random() - 0.5) * 2, // lokal um den Marker herum
          y: 0,
          z: (Math.random() - 0.5) * 2
        });
  
        this.el.appendChild(flower);
      }
    }
  });
