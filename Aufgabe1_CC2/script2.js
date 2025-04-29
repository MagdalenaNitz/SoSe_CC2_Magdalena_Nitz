document.addEventListener('DOMContentLoaded', () => {
    const scene2 = document.querySelector('a-scene');

    // Interaktive Partikel erzeugen
    for (let i = 0; i < 80; i++) {
        let interactiveParticle = document.createElement('a-sphere');
        interactiveParticle.setAttribute('radius', '0.04');
        interactiveParticle.setAttribute('color', '#CCFFCC'); // helles Grün für Blätter
        interactiveParticle.setAttribute('position', {
            x: (Math.random() - 0.5) * 10,
            y: Math.random() * 4 + 1,
            z: (Math.random() - 0.5) * 10
        });

        // Mausfokus oder Klick: Farbe ändern
        interactiveParticle.setAttribute('event-setenter', "_event: mouseenter; color: #00FF00");
        interactiveParticle.setAttribute('event-setleave', "_event: mouseleave; color: #CCFFCC");

        scene2.appendChild(interactiveParticle);
    }

    // Navigation zurück zu Szene 1
    const gotoScene1 = document.getElementById('gotoScene1');
    if (gotoScene1) {
        gotoScene1.addEventListener('click', () => {
            window.location.href = "indexccii.html";
        });
    }
});