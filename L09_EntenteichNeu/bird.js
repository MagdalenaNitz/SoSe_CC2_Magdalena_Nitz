"use strict";
var Ententeich;
(function (Ententeich) {
    class Bird extends Ententeich.Moveable {
        constructor(_x, _y, _color) {
            super(_x, _y, "grey");
        }
        move() {
            this.x += 2; // Geschwindigkeit des Vogels
            this.y += Math.sin(this.x * 0.05) * 2; // sanfte Auf- und Abbewegung
            if (this.x > Ententeich.crc2.canvas.width) {
                this.x = 0;
            }
        }
        draw() {
            Ententeich.crc2.save();
            Ententeich.crc2.translate(this.x, this.y);
            // Körper
            Ententeich.crc2.beginPath();
            Ententeich.crc2.fillStyle = this.color;
            Ententeich.crc2.ellipse(0, 0, 11, 8, 0, 0, 2 * Math.PI); // schlankere Form
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            // Kopf
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(13, -3, 4, 0, 2 * Math.PI); // kleinerer Kopf
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            // Schnabel
            Ententeich.crc2.beginPath();
            Ententeich.crc2.fillStyle = "orange";
            Ententeich.crc2.moveTo(12, -3);
            Ententeich.crc2.lineTo(15, -5);
            Ententeich.crc2.lineTo(12, -7);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            // Flügel
            Ententeich.crc2.beginPath();
            Ententeich.crc2.fillStyle = this.color;
            Ententeich.crc2.moveTo(-7, 0);
            Ententeich.crc2.lineTo(-17, -9); // längere Flügel
            Ententeich.crc2.lineTo(-9, -4); // veränderte Positionierung
            Ententeich.crc2.lineTo(-17, 0);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            Ententeich.crc2.restore();
        }
    }
    Ententeich.Bird = Bird;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=bird.js.map