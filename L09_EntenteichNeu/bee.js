"use strict";
var Ententeich;
(function (Ententeich) {
    class Bee extends Ententeich.Moveable {
        constructor(_x, _y, _color) {
            super(_x, _y, "yellow");
        }
        move() {
            this.x += 1;
            this.y += Math.sin(this.x * 0.05 * 2) - 1;
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
            Ententeich.crc2.ellipse(0, 0, 10, 5, 0, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            // Streifen
            Ententeich.crc2.beginPath();
            Ententeich.crc2.fillStyle = "black";
            Ententeich.crc2.ellipse(-2, 0, 2, 5, 0, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            Ententeich.crc2.beginPath();
            Ententeich.crc2.ellipse(2, 0, 2, 5, 0, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            // Kopf
            Ententeich.crc2.beginPath();
            Ententeich.crc2.fillStyle = "black";
            Ententeich.crc2.arc(10, 0, 3, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            // Flügel
            Ententeich.crc2.beginPath();
            Ententeich.crc2.fillStyle = "rgba(255, 255, 255, 0.6)";
            Ententeich.crc2.ellipse(0, -5, 3, 8, -Math.PI / 4, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            Ententeich.crc2.beginPath();
            Ententeich.crc2.ellipse(0, 5, 3, 8, Math.PI / 4, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            Ententeich.crc2.restore();
        }
    }
    Ententeich.Bee = Bee;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=bee.js.map