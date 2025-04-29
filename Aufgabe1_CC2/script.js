document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');

    //Partikel erzeugen
    for (let i = 0; i < 100; i++) {
        let particle = document.createElement('a-sphere');
        particle.setAttribute('radius', '0.03');
        particle.setAttribute('color', '#FFFFFF'); // weiß

    particle.setAttribute('position', {
        x: (Math.random() - 0.5) * 10,
        y: Math.random() * 4 + 1,
        z: (Math.random() - 0.5) * 10
    });
    particle.setAttribute('animation', {
        property: 'position',
        to: `${ (Math.random() - 0.5) * 10} ${ (Math.random() * 4) + 1} ${ (Math.random() - 0.5) * 10}`,
        dur: 5000 + Math.random() * 5000,
        dir: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
    scene.appendChild(particle);

    }

    //Navigation zu Szene 2
    const gotoScene2 = document.getElementById('gotoScene2');
        if (gotoScene2) {
            gotoScene2.addEventListener('click', () => { 
                window.location.href = "indexzwei.html"; 
            });
        }
})