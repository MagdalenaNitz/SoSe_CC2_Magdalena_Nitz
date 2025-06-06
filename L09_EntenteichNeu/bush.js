"use strict";
var Ententeich;
(function (Ententeich) {
    class Bush {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            let numberOfParticles = 50;
            let cloudWidth = 90;
            let cloudHeight = 70;
            let xPosition = 290;
            let yPosition = 640;
            let random = Ententeich.pseudoRandom(42);
            for (let i = 0; i < numberOfParticles; i++) {
                let x = xPosition + (i * (cloudWidth / numberOfParticles));
                let y = yPosition + (random() * cloudHeight);
                this.drawBushParticle(x, y);
            }
        }
        drawBushParticle(x, y) {
            Ententeich.crc2.save();
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(x, y, 15, 0, Math.PI * 2);
            Ententeich.crc2.fillStyle = "#006400";
            Ententeich.crc2.fill();
            Ententeich.crc2.restore();
        }
    }
    Ententeich.Bush = Bush;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=bush.js.map