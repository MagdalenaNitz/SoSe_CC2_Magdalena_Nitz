document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');  // holt a-scene-Element aus DOM, in dem 3D-Szene stattfindet
  
    const stoneCount = 45 // Anzahl der Steine
;
    const radius = 2.5; // Radius des Kreises, auf dem äußere Steine verteilt sind
    const centerX = 0;  // Koordinaten des Kreismittelpunkts (Teich)
    const centerZ = -5;
  
    for (let i = 0; i < stoneCount; i++) {  // Schleife zur Erzeugung der Steine
      const angle = (i / stoneCount) * Math.PI * 2; // Berechnung des WInkels auf dem Kreis für den aktuellen Stein (gleichmäßig verteilt)
      const x = centerX + Math.cos(angle) * radius; // Berechnet X- und Z-Position des Steins auf dem Kreis basierend auf Winkel und Radius
      const z = centerZ + Math.sin(angle) * radius;
  
      // Zufällige Erzeugung der Werte für Größen der Steine: sehr klein bis mittelgroß
      const base = 0.08 + Math.random() * 0.14; // 0.08–0.22
      const heightFactor = 0.5 + Math.random() * 0.6; // 0.5–1.1
  
      const yPos = (base * heightFactor) / 2 - 0.015; // berechnet Y-Position des Steins, damit er auf dem Boden steht
  
      const stone = document.createElement('a-sphere'); // erstellt Kugel als Stein
      stone.setAttribute('position', `${x} ${yPos} ${z}`);  // Positionierung
      stone.setAttribute('scale', `${base} ${base * heightFactor} ${base}`);  // Skalierung
      stone.setAttribute('src', '#stoneTex'); //Textur
      stone.setAttribute('material', 'roughness: 1; metalness: 0; shader: standard;');  // Material
      stone.setAttribute('shadow', 'cast: true'); // Schatten
  
      scene.appendChild(stone); // Hinzufügen des Steins zur Szene
    }

    // Zusätzliche 5 Steine im Teich
    const innerStoneCount = 5; // Anzahl Steine
    const innerRadius = 1.8;  // Radius, wo platziert

    for (let i = 0; i < innerStoneCount; i++) { // Schleife für inneren Steine
        const angle = Math.random() * Math.PI * 2;  // zufällige Winkel und Entfernung vom Mittelpunkt, damit Steine im Teich zufällig verteilt
        const dist = Math.random() * innerRadius;
        const x = centerX + Math.cos(angle) * dist; // berechnet X- und Z-Koordinaten der inneren Steine
        const z = centerZ + Math.sin(angle) * dist;

        const base = 0.1 + Math.random() * 0.15;  // zufällige Größe und Höhe
        const heightFactor = 0.4 + Math.random() * 0.7;
        const yPos = (base * heightFactor) / 2 - 0.04;  // Y-Position etwas tiefer, da im Wasser

        const innerStone = document.createElement('a-sphere');  // erstellt Kugel für Stein
        innerStone.setAttribute('position', `${x} ${yPos} ${z}`);
        innerStone.setAttribute('scale', `${base} ${base * heightFactor} ${base}`);
        innerStone.setAttribute('src', '#stoneTex');
        innerStone.setAttribute('material', 'roughness: 1; metalness: 0; shader: standard;');
        innerStone.setAttribute('shadow', 'cast: true');

        scene.appendChild(innerStone);  // Hinzufügen des inneren Steins zur Szene
    }
  });
  