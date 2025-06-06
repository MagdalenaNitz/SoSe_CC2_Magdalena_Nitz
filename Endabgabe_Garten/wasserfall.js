AFRAME.registerComponent('wasserfall', {
    init: function () {
      let el = this.el;
      el.setAttribute('geometry', { primitive: 'box', height: 4, width: 1, depth: 0.1 });
      el.setAttribute('material', { color: 'blue', opacity: 0.7 });
      
      // Animation für fließendes Wasser
      el.setAttribute('animation', {
        property: 'position',
        to: '0 -2 0',
        loop: true,
        dur: 2000
      });
    }
  });
  