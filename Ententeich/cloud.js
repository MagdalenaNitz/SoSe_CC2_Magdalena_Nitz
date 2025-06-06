"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Cloud extends L09_Pond.Movable {
        constructor(_x, _y, _direction) {
            super(_x, _y, _direction);
        }
        move() {
            //console.log("cloud move");
            this.x += 1;
            // Wenn die Wolke aus dem Bild fliegt, setze sie wieder an den Anfang
            if (this.x > L09_Pond.crc2.canvas.width) {
                this.x = -170; // Setze die Wolke außerhalb des linken Rands des Canvas
            }
        }
        draw() {
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y);
            // Wolke zeichnen
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(150, 0);
            L09_Pond.crc2.lineTo(0, 0);
            L09_Pond.crc2.ellipse(50, 0, 40, 30, 0, Math.PI, 0, false);
            L09_Pond.crc2.ellipse(100, 0, 60, 60, 0, Math.PI, 0, false);
            L09_Pond.crc2.ellipse(170, 0, 50, 30, 0, Math.PI, 0, false);
            L09_Pond.crc2.closePath();
            let cloudColor = "white";
            L09_Pond.crc2.fillStyle = cloudColor;
            L09_Pond.crc2.fill();
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Cloud = Cloud;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=cloud.js.map