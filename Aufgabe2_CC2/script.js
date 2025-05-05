AFRAME.registerComponent('generate-flowers', {
    init: function () { 
        // Schleife, um 50 Blumen zu generieren
        for (let i = 0; i < 50; i++) {
            // Erstellen eines neuen A-Frame Entity-Elements für die Blume
            let flowers = document.createElement('a-entity');
            // Festlegen der Geometrie der Blume (Zylinder
            flowers.setAttribute ('geometry', {
                primitive: 'cylinder',
                height: 0.2,
                radius: 0.05
            });
            // Festlegen des Materials der Blume (Farbe)
            flowers.setAttribute ('material', {
                color: '#FF69B4'
            });
            // Zufällige Positionierung der Blume innerhalb eines Bereichs von 10 Einheiten
            flowers.setAttribute ('position', {
                x: (Math.random () - 0.5) * 10,
                y: 0,
                z: (Math.random () - 0.5) * 10
            });
            // Hinzufügen der Blume zur Szene
            this.el.appendChild(flower);
        }
    }
});