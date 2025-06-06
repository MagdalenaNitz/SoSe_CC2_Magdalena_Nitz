namespace L09_Pond {

    export class Duck extends Movable {
        private state: "duckNormal" | "duckHeart";
        private framesCounter: number = 0;
        private isClicked: boolean = false;
    
        
    public constructor(_x: number, _y: number, _direction: Vector) {
        super(_x, _y, _direction);
        this.state = "duckNormal";
    }

    public move(): void {
        //console.log("duck move");
        this.x += this.direction.x;

        switch(this.state) {
            case "duckHeart":
                if (this.isClicked){
                this.framesCounter++
                // console.log(this.framesCounter);
                if (this.framesCounter>= 30){
                    this.framesCounter = 0;
                    this.isClicked = false;
                    this.state = "duckNormal";
                }}   
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

    public checkHit(_x: number, _y: number): boolean {
        //console.log("Hit")
        const minX = this.x - 20;
        const maxX = this.x + 20;
        const minY = this.y - 20;
        const maxY = this.y + 20; // Grenzen um die Ente festlegen
        if (_x > minX && _x < maxX && _y > minY && _y < maxY) {
            this.click();
            return true; 
        } else {
            return false; 
        }
    }

      public click(): void {
        // Zustand zu duckHeart wechseln und Frame-Zähler setzen
        //console.log("click")
        this.isClicked = true;
        this.state = "duckHeart";
    }

    public draw(): void {
        switch (this.state) {
            case "duckHeart":
                this.drawHeart();
                break;
            default:
                this.drawDuckNormal();
            }
        }


    public drawDuckNormal(): void {
        //console.log("duck draw");
        crc2.save();

        crc2.translate(this.x, this.y);
        if (this.direction.x === -1) {
            crc2.scale(-1, 1); // Horizontal spiegeln
        }

        // Körper
        crc2.beginPath();
        crc2.ellipse(0, 0, 25, 12, 0, 0, 2 * Math.PI);
        crc2.closePath();

        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.strokeStyle = "yellow";
        crc2.stroke();

        // Kopf
        crc2.beginPath();
        crc2.arc(20, -20, 10, 0, 2 * Math.PI); // Kopf
        crc2.closePath();
        crc2.fillStyle = "yellow";
        crc2.fill();

        // Schnabel
        crc2.beginPath();
        crc2.moveTo(30, -24);
        crc2.lineTo(28, -12);
        crc2.lineTo(35, -15);
        crc2.closePath();
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.strokeStyle = "brown";
        crc2.stroke();

        // Auge
        crc2.beginPath();
        crc2.arc(24, -20, 2, 0, 2 * Math.PI); // Auge
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        // Flügel der Ente
        crc2.beginPath();
        crc2.moveTo(-10, 0);
        crc2.quadraticCurveTo(5, -20, 15, 5);
        crc2.quadraticCurveTo(-10, 10, 0, 0);
        crc2.closePath();
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.strokeStyle = "brown";
        crc2.stroke();

        crc2.restore();
    }

    private drawHeart(): void {
        //console.log("draw heart aufgerufen")
        crc2.save()
        crc2.translate(this.x, this.y);
        if (this.direction.x === -1) {
            crc2.scale(-1, 1); // Horizontal spiegeln
        }
       
        // Körper
        crc2.beginPath();
        crc2.ellipse(0, 0, 25, 12, 0, 0, 2 * Math.PI);
        crc2.closePath();

        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.strokeStyle = "yellow";
        crc2.stroke();

        // Kopf
        crc2.beginPath();
        crc2.arc(20, -20, 10, 0, 2 * Math.PI); // Kopf
        crc2.closePath();
        crc2.fillStyle = "red";
        crc2.fill();
        //Augenbraue
        crc2.beginPath();
        crc2.beginPath();
        crc2.moveTo(20, -26);
        crc2.lineTo(25, -23);
        crc2.closePath();
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 1; 
        crc2.stroke();


        // Schnabel
        crc2.beginPath();
        crc2.moveTo(30, -24);
        crc2.lineTo(28, -12);
        crc2.lineTo(35, -15);
        crc2.closePath();
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 1;
        crc2.stroke();

        // Auge
        crc2.beginPath();
        crc2.arc(24, -20, 2, 0, 2 * Math.PI); // Auge
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        // Flügel der Ente
        crc2.beginPath();
        crc2.moveTo(-10, 0);
        crc2.quadraticCurveTo(5, -20, 15, 5);
        crc2.quadraticCurveTo(-10, 10, 0, 0);
        crc2.closePath();
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 1;
        crc2.stroke();

        // Herz zeichnen
        crc2.save();
        crc2.translate(this.x, this.y - 30); // Position über der Ente

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.beginPath();
        crc2.moveTo(0, -3.75); // Startpunkt oben mittig (15 / 4 = 3.75)
        crc2.bezierCurveTo(-3.75, -7.5, -7.5, -7.5, -7.5, 0); // (-15 / 4 = -3.75), (-15 / 2 = -7.5)
        crc2.bezierCurveTo(-7.5, 7.5, 0, 7.5, 0, 15); // 15 / 2 = 7.5
        crc2.bezierCurveTo(0, 7.5, 7.5, 7.5, 7.5, 0); // 15 / 2 = 7.5
        crc2.bezierCurveTo(7.5, -7.5, 3.75, -7.5, 0, -3.75); // 15 / 4 = 3.75
        crc2.fillStyle = "red";
        crc2.fill();

        crc2.restore();
        crc2.restore();
    }
} 
}
