namespace Ententeich {
    export class Duck extends Moveable {

        constructor(_x: number, _y: number, _color: string) {
            super (_x, _y, _color);
        }

        move() {
            this.x += 1;
            if (this.x > crc2.canvas.width) {
                this.x = 0;
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

            // Körper
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.ellipse(0, 0, 20, 10, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            // Kopf
            crc2.beginPath();
            crc2.arc(15, -10, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            // Schnabel
            crc2.beginPath();
            crc2.fillStyle = "orange";
            crc2.moveTo(25, -10);
            crc2.lineTo(35, -5);
            crc2.lineTo(25, 0);
            crc2.fill();
            crc2.closePath();

            // Auge
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(18, -13, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }
    }
}