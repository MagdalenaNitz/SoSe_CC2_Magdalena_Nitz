namespace L09_Pond {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("DOMContentLoaded", () => {
        // Finde den Button im DOM
        const moreBirdsBtn = document.getElementById("moreBirdsBtn");
    
        // Füge einen Event Listener hinzu
        if (moreBirdsBtn) {
            moreBirdsBtn.addEventListener("click", handleMoreBirds);
        }
    });

    //Objekt Arrays
    let movable: Movable[] = [];
    let crumbs: Crumbs[] = [];

    function handleLoad(_event: Event): void {
        // Zugriff auf das Canvas-Element
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.addEventListener("click", handleClick);

        // Tails generieren
        for (let i: number = 0; i < 3; i++) {
            let randomX: number = 270 + Math.random() * 250;
            let randomY: number = 350 + Math.random() * 100; 
            let tail: Tail = new Tail(randomX, randomY, new Vector(1, 0));
            //let tail: Tail = new Tail(260 + Math.random() * 20, 330 + Math.random() * 80, new Vector(1, 0)); // Startposition
            movable.push(tail);
        }

        // Ducks generieren
        for (let i: number = 0; i < 3; i++) {
            let randomX: number = 270 + Math.random() * 250; 
            let randomY: number = 350 + Math.random() * 100; 
            let duck: Duck = new Duck(randomX, randomY, new Vector(1, 0));
            movable.push(duck);
        }

        //Flamingo generieren
        for (let i: number = 0; i < 4; i++) {
            let randomX: number = 10 + Math.random() * 250; // Zufällige x-Position zwischen 10 und 50
            let randomY: number = 300 + Math.random() * 250; // Zufällige y-Position zwischen 300 und 550
            let flamingo: Flamingo = new Flamingo(randomX, randomY, new Vector(1, 0));
            movable.push(flamingo);
        }
        // Clouds random auf x und y zeichnen
        for (let i: number = 0; i < 5; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200, new Vector(-1, 0));
            movable.push(cloud);
        }

        // Ladybugs generieren
        for (let i: number = 0; i < 5; i++) {
            let randomX: number = Math.random() * canvas.width;
            let randomY: number = Math.random() * canvas.height;
            let ladybug: Ladybug = new Ladybug(randomX, randomY, new Vector(1, 0), Math.random() * 10 - 1, Math.random() * 8 - 1);
            movable.push(ladybug);
        }

        setInterval(animate, 20);
    }

    function handleMoreBirds() {
        const randomNumber = Math.random();
    
        // Zufällig entscheiden, ob eine Ente oder ein Flamingo hinzugefügt wird
        if (randomNumber < 0.5) {
            // Ente hinzufügen
            const randomX = 270 + Math.random() * 250; 
            const randomY = 350 + Math.random() * 100; 
            const duck = new Duck(randomX, randomY, new Vector(1, 0));
            movable.push(duck);
        } else {
            // Flamingo hinzufügen
            const randomX = 10 + Math.random() * 250; 
            const randomY = 300 + Math.random() * 250; 
            const flamingo = new Flamingo(randomX, randomY, new Vector(1, 0));
            movable.push(flamingo);
        }
    }

     
    export function handleClick(event: MouseEvent): void {
        let canvasRect = (event.target as HTMLCanvasElement).getBoundingClientRect(); //Klickbaen Bereich festlegen
        let clickX = event.clientX - canvasRect.left;
        let clickY = event.clientY - canvasRect.top;

        console.log(`Clicked at position: (${clickX}, ${clickY})`);

        if (clickX >= 10 && clickX <= 270 && clickY >= 300 && clickY <= 560) { //Wenn klick in bestimmtem Bereich
            let crumb: Crumbs = new Crumbs(clickX, clickY); //Crumb bei Click spawnen
            
            crumbs.push(crumb); //crumb zeichnen

            let closestFlamingo: Flamingo | null = null; //Flamingo speichern
            let closestDistance: number = Infinity; //kürzeste Distanz speichern

            for (let movables of movable) {
                if (movables instanceof Flamingo) { //Distanz von Flamingos zu Crumb messen
                    let flamingo = movables as Flamingo;
                    let distance = Math.sqrt((flamingo.x - crumb.x) ** 2 + (flamingo.y - crumb.y) ** 2);

                    // Zustand des Flamingos überprüfen
                    if (distance < closestDistance && flamingo.state !== "flamingoEat") {
                        closestDistance = distance;
                        closestFlamingo = flamingo;
                    }
                }
            }
        
            if (closestFlamingo) {
                closestFlamingo.setTarget(clickX, clickY);
            }
        }

        for (let movables of movable) {
            if (movables instanceof Duck) { //Enten Position mit Klickposition abgleichen
                let duck = movables as Duck
                if (duck.checkHit(clickX, clickY)) {
                    
                }
            }
        }
    }

    export function deleteCrumb(): void {
        crumbs = crumbs.filter((crumb) => { //Filter läuft durch Crumb Array und sortiert die aus, die die Bedingungen erfüllen
            for (let movables of movable) {
                if (movables instanceof Flamingo) {
                    let flamingo = movables as Flamingo

                    // Berechne die Entfernung zwischen Flamingo und Crumb
                    let distance = Math.sqrt((flamingo.x - (crumb.x - 20)) ** 2 + (flamingo.y - (crumb.y + 40)) ** 2);
    
                    //Wenn Flamingo bei Crumb und es isst, lösche den Crumb
                    if (distance < 100 && flamingo.state === "flamingoEat") {
                        // console.log("deleteCrumb");
                        return false;
                    }
                }
            }
            return true; 
        });
    }
    
    function animate(): void {
        drawBackround();

        for (let crumb of crumbs) {
            crumb.draw();
        }

        for (let movables of movable) {
            movables.draw();
            movables.move();
            if (movable instanceof Flamingo) {
            }
        }

        deleteCrumb(); 
    }

    function drawBackround(): void {
        fillBackground();
        sun();
        lake();
        mountain();
        bush(100, 320);
        bush(300, 300);
        bush(460, 320);
        drawTree();
    }

    function drawTree(): void {
        crc2.save();
        crc2.translate(40, 300);

        // Stamm
        crc2.beginPath();
        crc2.rect(-10, 0, 20, 50);
        crc2.closePath();

        let trunkColor: string = "#8B4513";
        crc2.fillStyle = trunkColor;
        crc2.fill();

        // Blätter
        crc2.beginPath();
        crc2.ellipse(0, -20, 35, 60, 0, 0, 2 * Math.PI);
        crc2.ellipse(0, -50, 30, 50, 0, 0, 2 * Math.PI);
        crc2.ellipse(0, -70, 25, 40, 0, 0, 2 * Math.PI);
        crc2.closePath();

        let leafColor: string = "green";
        crc2.fillStyle = leafColor;
        crc2.fill();

        crc2.restore();
    }


    function bush(_x: number, _y: number): void {
        crc2.save();
        crc2.translate(_x, _y);

        // Busch zeichnen
        crc2.beginPath();
        crc2.ellipse(30, 0, 10, 20, 0, Math.PI, 0, false);
        crc2.ellipse(65, 0, 35, 50, 0, Math.PI, 0, false);
        crc2.ellipse(80, 0, 35, 60, 0, Math.PI, 0, false);
        crc2.ellipse(100, 0, 35, 60, 0, Math.PI, 0, false);
        crc2.ellipse(120, 0, 30, 30, 0, Math.PI, 0, false);
        crc2.closePath();

        let bushColor: string = "green";
        crc2.fillStyle = bushColor;
        crc2.fill();

        crc2.restore();
    }

    // Hintergrund einfärben
    function fillBackground(): void {
        // Grünen Hintergrund zeichnen
        let grassColor: string = "#90E162";
        crc2.fillStyle = grassColor;
        crc2.fillRect(0, 0, 1000, 600);

        // Blaues Rechteck zeichnen
        let skyColor: string = "#48BCE1";
        crc2.fillStyle = skyColor;
        crc2.fillRect(0, 0, 600, 250);
    }

    function sun(): void {
        // Mittelpunkt und Durchmesser des Kreises
        let centerX: number = 500;
        let centerY: number = 100;
        let radius: number = 40;

        // Kreis zeichnen
        crc2.beginPath();
        crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        crc2.closePath();

        // Farbe 
        let circleColor: string = "yellow"; // Gelbe Farbe
        crc2.fillStyle = circleColor;
        crc2.fill();

        // Sonnenstrahlen zeichnen
        let lineLength: number = 20;
        crc2.strokeStyle = "yellow";
        for (let i = 0; i < 8; i++) { //Schleife, um 8 Linien zu zeichnen
            let angle: number = (i / 8) * (2 * Math.PI); // Winkel für die Linie 1/8 von 365 Grad
            let startX: number = centerX + radius * Math.cos(angle);
            let startY: number = centerY + radius * Math.sin(angle);
            let endX: number = startX + lineLength * Math.cos(angle);
            let endY: number = startY + lineLength * Math.sin(angle);
            crc2.beginPath();
            crc2.moveTo(startX, startY);
            crc2.lineTo(endX, endY);
            crc2.stroke();
            crc2.closePath();
        }
    }

    function lake(): void {
        // Mittelpunkt und Größe der Ellipse
        let centerX: number = 430;
        let centerY: number = 410;
        let radiusX: number = 160;
        let radiusY: number = 90;

        // Ellipse zeichnen
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        crc2.closePath();

        let lakeColor: string = "#4676E0";
        crc2.fillStyle = lakeColor;
        crc2.fill();
    }

    function mountain(): void {
        // Berg zeichnen
        crc2.beginPath();
        crc2.moveTo(200, 250);
        crc2.quadraticCurveTo(400, -40, 600, 250); // Bogen für den Berg
        crc2.closePath();

        let mountainColor: string = "#707070";
        crc2.fillStyle = mountainColor;
        crc2.fill();

        // 2. Berg zeichnen
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.quadraticCurveTo(150, 100, 370, 250); // Bogen für den Berg
        crc2.closePath();

        let mountainColorTwo: string = "gray";
        crc2.fillStyle = mountainColorTwo;
        crc2.fill();
    }
}
