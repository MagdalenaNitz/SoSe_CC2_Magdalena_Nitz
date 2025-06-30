AFRAME.registerComponent('fence-field', {   // Registrieren der neuen Komponente
    init: function () {
      const scene = this.el;
      const fenceModel = 'Wooden fence.glb';    // für jedes Element wird das Modell verwendet
  
      const addFence = (x, z, rotation) => {    // Zaun an bestimmter Position mit bestimmter Rotation erzeugen
        const fence = document.createElement('a-entity');   // neues A-Frame-Entity, das den Zaun repräsentiert
        fence.setAttribute('gltf-model', fenceModel);   // Sichtbarmachen des Zauns
        fence.setAttribute('position', `${x} 0 ${z}`);  // Positionierung
        fence.setAttribute('scale', '1 1 1');   // Skalierung des Zauns auf Standardgröße
        fence.setAttribute('rotation', rotation);   // Rotation
        scene.appendChild(fence);   // fügt das Zaun-Entity der Szene zu, damit sichtbar
      };
  
      const shiftX = -7;    // Verschiebungswerte für die Position des gesamten Geheges auf der X- und Z-Achse
      const shiftZ = 10;    // Verschiebung um -7 nach links und +10 nach vorne
  
      // Anzahl Zaunelemente für lange Seiten
      const longCount = 7;
      // Abstand zwischen Zaunelementen
      const longSpacing = 1.2;
  
      for (let i = 0; i < longCount; i++) { // Schleife von 0 bis 7, um die Zaunelemente für die langen Seiten zu erzeugen
        const z = -longSpacing * (longCount - 1) / 2 + i * longSpacing; // Berechnung der Z-Position entlang der langen Seite
        addFence(-longSpacing * (longCount / 2) + shiftX, z + shiftZ, '0 0 0'); // linke lange Seite; Hinzufügen von Zaunelement
        addFence(longSpacing * (longCount / 2) + shiftX, z + shiftZ, '0 0 0');  // rechte lange Seite
      }
  
      // Anzahl Zaunelemente für kurze Seiten
      const shortCount = 6;
      const shortSpacing = 1.2;
  
      for (let i = 0; i < shortCount; i++) {
        const x = -shortSpacing * (shortCount - 1) / 2 + i * shortSpacing;
        addFence(x + shiftX, -longSpacing * (longCount / 2) + shiftZ, '0 90 0'); // untere kurze Seite
        addFence(x + shiftX, longSpacing * (longCount / 2) + shiftZ, '0 90 0');  // obere kurze Seite
      }
    }
  });
  