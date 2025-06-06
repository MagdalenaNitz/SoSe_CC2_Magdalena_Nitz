namespace Ententeich {

    export class Bee extends Moveable {

        constructor(_x: number, _y: number, _color: string) {
           super (_x, _y, "yellow");
        }

        move(): void {
            this.x += 1;
            this.y += Math.sin (this.x * 0.05 * 2) -1;
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
            crc2.ellipse(0, 0, 10, 5, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            // Streifen
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.ellipse(-2, 0, 2, 5, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.ellipse(2, 0, 2, 5, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            // Kopf
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(10, 0, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            // Flügel
            crc2.beginPath();
            crc2.fillStyle = "rgba(255, 255, 255, 0.6)";
            crc2.ellipse(0, -5, 3, 8, - Math.PI / 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.ellipse(0, 5, 3, 8, Math.PI / 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }
    }
}