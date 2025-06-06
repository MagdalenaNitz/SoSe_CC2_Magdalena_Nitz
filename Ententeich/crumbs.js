"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Crumbs {
        x;
        y;
        crumbX;
        crumbY;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        checkLocation(_clickX, _clickY) {
            // Überprüfen, ob der Klick im Bereich der Krümel liegt
            const minX = 10;
            const maxX = 270;
            const minY = 300;
            const maxY = 600;
            if (_clickX > minX && _clickX < maxX && _clickY > minY && _clickY < maxY) {
                return (_clickX >= 10 && _clickX <= 270 && _clickY >= 300 && _clickY <= 500);
                // Klick befindet sich im Bereich
            }
            else {
                return false;
            }
        }
        getPosition() {
            return { x: this.x, y: this.y };
        }
        draw() {
            L09_Pond.crc2.save();
            let foodColor = "#991c41";
            //beeren
            L09_Pond.crc2.translate(this.x, this.y);
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.fillStyle = foodColor;
            L09_Pond.crc2.arc(0, 2, 4, 0, 2 * Math.PI);
            L09_Pond.crc2.fill();
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.fillStyle = foodColor;
            L09_Pond.crc2.arc(3, 1, 4, 0, 2 * Math.PI);
            L09_Pond.crc2.fill();
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.fillStyle = foodColor;
            L09_Pond.crc2.arc(-7, -2, 4, 0, 2 * Math.PI);
            L09_Pond.crc2.fill();
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.fillStyle = foodColor;
            L09_Pond.crc2.arc(-3, -6, 3, 0, 2 * Math.PI);
            L09_Pond.crc2.fill();
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Crumbs = Crumbs;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=crumbs.js.map