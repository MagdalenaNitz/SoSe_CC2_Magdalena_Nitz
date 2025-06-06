namespace Ententeich {
    window.addEventListener("load", handleLoad)

    export let crc2: CanvasRenderingContext2D;

    let middle: number = 0.45;
    let moveable: Moveable [] = [];
    
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        for (let i: number = 0; i < 9; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 200, 100 + Math.random() * 150);
            moveable.push(cloud);
        }

        let bush: Bush = new Bush(250, 610);
            console.log (bush);
            bush.draw();
        
        drawBackground();
        setInterval(animate, 40);

        let duck: Duck = new Duck(10, 680, "yellow");
            //console.log (duck);
            duck.draw();
            moveable.push(duck);

        let duck2: Duck = new Duck(170, 610, "yellow");
            //console.log (duck2);
            duck.draw();
            moveable.push(duck2);

        let duck3: Duck = new Duck (100, 580, "yellow");
            //console.log (duck3);
            duck.draw();
            moveable.push(duck3);

        let duck4: Duck = new Duck (-10, 600, "yellow");
            //console.log (duck4);
            duck.draw();
            moveable.push(duck4);

        let duck5: Duck = new Duck (50, 650, "yellow");
            //console.log (duck5);
            duck.draw();
            moveable.push(duck5);

        let bee: Bee = new Bee(10, 800, "yellow");
            //console.log (bee);
            bee.draw();
            moveable.push (bee);

        let bee2: Bee = new Bee(100, 550, "yellow");
            //console.log (bee2);
            bee.draw();
            moveable.push (bee2);

        let bee3: Bee = new Bee(200, 400, "yellow");
            //console.log (bee3);
            bee.draw();
            moveable.push (bee3);
        
        let bird: Bird = new Bird (100, 100, "grey");
            //console.log (bird);
            bird.draw();
            moveable.push (bird);

        let bird2: Bird = new Bird (150, 150, "grey");
            //console.log (bird2);
            bird.draw();
            moveable.push (bird2);

        let bird3: Bird = new Bird (0, 90, "grey");
            //console.log (bird3);
            bird.draw();
            moveable.push (bird3);

        let bird4: Bird = new Bird (-20, 50, "grey");
            //console.log (bird4);
            bird.draw();
            moveable.push (bird4);

        let bird5: Bird = new Bird (50, 110, "grey");
            //console.log (bird5);
            bird.draw();
            moveable.push (bird5);
    }

    function animate(): void {
        drawBackground();

        for (let i: number = 0; i < moveable.length; i++) {
            moveable [i].move();
            moveable [i].draw();
        }
       }
 
    function drawBackground(): void {
    //console.log("Background");
    
        let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(middle, "white")
        gradient.addColorStop(1, "green")
    
        crc2.fillStyle = gradient; 
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    
        drawSun();
        drawMountains();
        drawTree(new Vector(300, 530), 70, 20, 40);
        drawLake();
        drawHouse();

    }

    function drawSun(): void {
    //console.log("Sun");

         let r1: number = 50;
         let r2: number = 150;
         let gradient: CanvasGradient = crc2.createRadialGradient (0, 0, r1, 0, 0, r2);
 
         gradient.addColorStop(0, "HSLA(60, 100%, 80%, 1)");
         gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
 
         crc2.save();
         crc2.translate(70, 70);
         crc2.fillStyle = gradient;
         crc2.arc(0, 0, r2, 0, 2* Math.PI);
         crc2.fill();
         crc2.restore();
    }
    function drawMountains(): void {
        //console.log("Mountains");
        let color: string = "#aaaaaa";
        //Berg 1 zeichnen
        crc2.save();
        crc2.beginPath();
        crc2.translate(0,450);
        crc2.fillStyle = color;
        crc2.beginPath();
        crc2.moveTo(-250, 0); 
        crc2.lineTo(390, 0);
        crc2.lineTo(390, -60); 
        crc2.lineTo(310, -120); 
        crc2.lineTo(220, -65);
        crc2.lineTo(150, -100);
        crc2.lineTo(70, -70);
        crc2.lineTo(-50, -120);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Berg 2 zeichnen
        crc2.save();
        crc2.beginPath();
        crc2.translate(0,450);
        crc2.fillStyle = "grey";
        crc2.beginPath();
        crc2.moveTo(-250, 0); 
        crc2.lineTo(390, 0);
        crc2.lineTo(390, -50); 
        crc2.lineTo(310, -100); 
        crc2.lineTo(220, -55);
        crc2.lineTo(150, -80);
        crc2.lineTo(70, -60);
        crc2.lineTo(-50, -110);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }

    export function pseudoRandom(seed: number): () => number {
        let value = seed;
        return function () {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }

    function drawTree(position: Vector, trunkHeight: number, trunkWidth: number, crownRadius: number): void {
        // Stamm zeichnen
        crc2.fillStyle = "brown";
        crc2.fillRect(position.x - trunkWidth / 2, position.y, trunkWidth, -trunkHeight);

        // Krone zeichnen
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.arc(position.x, position.y - trunkHeight, crownRadius, 0, Math.PI * 2);
        crc2.fill();
    }
        
    function drawLake(): void {

        let centerX = 190;
        let centerY = 630;
        let radiusX = 230;
        let radiusY = 100;

        crc2.save();
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2* Math.PI);
        crc2.closePath();
        crc2.fillStyle = "darkblue";
        crc2.fill();
        crc2.restore();
    }

    function drawHouse(): void {
        crc2.save();
        crc2.translate(10, 520); // Position des Hauses festlegen

        crc2.fillStyle = "brown"; // Farbe für das Haus festlegen
        crc2.beginPath();
        crc2.moveTo(0, 0); // Startpunkt des Hauses

        // Linien für das Haus zeichnen
        crc2.lineTo(0, -60);
        crc2.lineTo(40, -100);
        crc2.lineTo(80, -60);
        crc2.lineTo(80, 0);
        crc2.closePath();

        crc2.fill(); // Fülle das Haus mit Farbe
        crc2.restore();
    }
    
}