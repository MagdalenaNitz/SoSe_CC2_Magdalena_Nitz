"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Duck extends L09_Pond.Movable {
        state;
        framesCounter = 0;
        isClicked = false;
        constructor(_x, _y, _direction) {
            super(_x, _y, _direction);
            this.state = "duckNormal";
        }
        move() {
            //console.log("duck move");
            this.x += this.direction.x;
            switch (this.state) {
                case "duckHeart":
                    if (this.isClicked) {
                        this.framesCounter++;
                        // console.log(this.framesCounter);
                        if (this.framesCounter >= 30) {
                            this.framesCounter = 0;
                            this.isClicked = false;
                            this.state = "duckNormal";
                        }
                    }
                //break;
                default:
                    // Wenn die Ente bei 500 auf x, wechsle die Richtung
                    if (this.x > 500) {
                        this.direction.x = -1;
                    }
                    if (this.x < 270) {
                        this.direction.x = 1;
                    }
            }
        }
        checkHit(_x, _y) {
            //console.log("Hit")
            const minX = this.x - 20;
            const maxX = this.x + 20;
            const minY = this.y - 20;
            const maxY = this.y + 20; // Grenzen um die Ente festlegen
            if (_x > minX && _x < maxX && _y > minY && _y < maxY) {
                this.click();
                return true;
            }
            else {
                return false;
            }
        }
        click() {
            // Zustand zu duckHeart wechseln und Frame-Zähler setzen
            //console.log("click")
            this.isClicked = true;
            this.state = "duckHeart";
        }
        draw() {
            switch (this.state) {
                case "duckHeart":
                    this.drawHeart();
                    break;
                default:
                    this.drawDuckNormal();
            }
        }
        drawDuckNormal() {
            //console.log("duck draw");
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y);
            if (this.direction.x === -1) {
                L09_Pond.crc2.scale(-1, 1); // Horizontal spiegeln
            }
            // Körper
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.ellipse(0, 0, 25, 12, 0, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "yellow";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.strokeStyle = "yellow";
            L09_Pond.crc2.stroke();
            // Kopf
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(20, -20, 10, 0, 2 * Math.PI); // Kopf
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "yellow";
            L09_Pond.crc2.fill();
            // Schnabel
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(30, -24);
            L09_Pond.crc2.lineTo(28, -12);
            L09_Pond.crc2.lineTo(35, -15);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "orange";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.strokeStyle = "brown";
            L09_Pond.crc2.stroke();
            // Auge
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(24, -20, 2, 0, 2 * Math.PI); // Auge
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "black";
            L09_Pond.crc2.fill();
            // Flügel der Ente
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(-10, 0);
            L09_Pond.crc2.quadraticCurveTo(5, -20, 15, 5);
            L09_Pond.crc2.quadraticCurveTo(-10, 10, 0, 0);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "yellow";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.strokeStyle = "brown";
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.restore();
        }
        drawHeart() {
            //console.log("draw heart aufgerufen")
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y);
            if (this.direction.x === -1) {
                L09_Pond.crc2.scale(-1, 1); // Horizontal spiegeln
            }
            // Körper
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.ellipse(0, 0, 25, 12, 0, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "yellow";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.strokeStyle = "yellow";
            L09_Pond.crc2.stroke();
            // Kopf
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(20, -20, 10, 0, 2 * Math.PI); // Kopf
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "red";
            L09_Pond.crc2.fill();
            //Augenbraue
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(20, -26);
            L09_Pond.crc2.lineTo(25, -23);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.strokeStyle = "#000000";
            L09_Pond.crc2.lineWidth = 1;
            L09_Pond.crc2.stroke();
            // Schnabel
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(30, -24);
            L09_Pond.crc2.lineTo(28, -12);
            L09_Pond.crc2.lineTo(35, -15);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "orange";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.strokeStyle = "brown";
            L09_Pond.crc2.lineWidth = 1;
            L09_Pond.crc2.stroke();
            // Auge
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(24, -20, 2, 0, 2 * Math.PI); // Auge
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "black";
            L09_Pond.crc2.fill();
            // Flügel der Ente
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(-10, 0);
            L09_Pond.crc2.quadraticCurveTo(5, -20, 15, 5);
            L09_Pond.crc2.quadraticCurveTo(-10, 10, 0, 0);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "yellow";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.strokeStyle = "brown";
            L09_Pond.crc2.lineWidth = 1;
            L09_Pond.crc2.stroke();
            // Herz zeichnen
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y - 30); // Position über der Ente
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(0, 0);
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(0, -3.75); // Startpunkt oben mittig (15 / 4 = 3.75)
            L09_Pond.crc2.bezierCurveTo(-3.75, -7.5, -7.5, -7.5, -7.5, 0); // (-15 / 4 = -3.75), (-15 / 2 = -7.5)
            L09_Pond.crc2.bezierCurveTo(-7.5, 7.5, 0, 7.5, 0, 15); // 15 / 2 = 7.5
            L09_Pond.crc2.bezierCurveTo(0, 7.5, 7.5, 7.5, 7.5, 0); // 15 / 2 = 7.5
            L09_Pond.crc2.bezierCurveTo(7.5, -7.5, 3.75, -7.5, 0, -3.75); // 15 / 4 = 3.75
            L09_Pond.crc2.fillStyle = "red";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.restore();
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Duck = Duck;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=duck.js.map