"use strict";
var Ententeich;
(function (Ententeich) {
    class Duck extends Ententeich.Moveable {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.x += 1;
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
            Ententeich.crc2.ellipse(0, 0, 20, 10, 0, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            // Kopf
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(15, -10, 10, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            // Schnabel
            Ententeich.crc2.beginPath();
            Ententeich.crc2.fillStyle = "orange";
            Ententeich.crc2.moveTo(25, -10);
            Ententeich.crc2.lineTo(35, -5);
            Ententeich.crc2.lineTo(25, 0);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            // Auge
            Ententeich.crc2.beginPath();
            Ententeich.crc2.fillStyle = "black";
            Ententeich.crc2.arc(18, -13, 2, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            Ententeich.crc2.restore();
        }
    }
    Ententeich.Duck = Duck;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=duck.js.map