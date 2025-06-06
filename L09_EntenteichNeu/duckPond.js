"use strict";
var Ententeich;
(function (Ententeich) {
    window.addEventListener("load", handleLoad);
    let middle = 0.45;
    let moveable = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Ententeich.crc2 = canvas.getContext("2d");
        for (let i = 0; i < 9; i++) {
            let cloud = new Ententeich.Cloud(Math.random() * 200, 100 + Math.random() * 150);
            moveable.push(cloud);
        }
        let bush = new Ententeich.Bush(250, 610);
        console.log(bush);
        bush.draw();
        drawBackground();
        setInterval(animate, 40);
        let duck = new Ententeich.Duck(10, 680, "yellow");
        //console.log (duck);
        duck.draw();
        moveable.push(duck);
        let duck2 = new Ententeich.Duck(170, 610, "yellow");
        //console.log (duck2);
        duck.draw();
        moveable.push(duck2);
        let duck3 = new Ententeich.Duck(100, 580, "yellow");
        //console.log (duck3);
        duck.draw();
        moveable.push(duck3);
        let duck4 = new Ententeich.Duck(-10, 600, "yellow");
        //console.log (duck4);
        duck.draw();
        moveable.push(duck4);
        let duck5 = new Ententeich.Duck(50, 650, "yellow");
        //console.log (duck5);
        duck.draw();
        moveable.push(duck5);
        let bee = new Ententeich.Bee(10, 800, "yellow");
        //console.log (bee);
        bee.draw();
        moveable.push(bee);
        let bee2 = new Ententeich.Bee(100, 550, "yellow");
        //console.log (bee2);
        bee.draw();
        moveable.push(bee2);
        let bee3 = new Ententeich.Bee(200, 400, "yellow");
        //console.log (bee3);
        bee.draw();
        moveable.push(bee3);
        let bird = new Ententeich.Bird(100, 100, "grey");
        //console.log (bird);
        bird.draw();
        moveable.push(bird);
        let bird2 = new Ententeich.Bird(150, 150, "grey");
        //console.log (bird2);
        bird.draw();
        moveable.push(bird2);
        let bird3 = new Ententeich.Bird(0, 90, "grey");
        //console.log (bird3);
        bird.draw();
        moveable.push(bird3);
        let bird4 = new Ententeich.Bird(-20, 50, "grey");
        //console.log (bird4);
        bird.draw();
        moveable.push(bird4);
        let bird5 = new Ententeich.Bird(50, 110, "grey");
        //console.log (bird5);
        bird.draw();
        moveable.push(bird5);
    }
    function animate() {
        drawBackground();
        for (let i = 0; i < moveable.length; i++) {
            moveable[i].move();
            moveable[i].draw();
        }
    }
    function drawBackground() {
        //console.log("Background");
        let gradient = Ententeich.crc2.createLinearGradient(0, 0, 0, Ententeich.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(middle, "white");
        gradient.addColorStop(1, "green");
        Ententeich.crc2.fillStyle = gradient;
        Ententeich.crc2.fillRect(0, 0, Ententeich.crc2.canvas.width, Ententeich.crc2.canvas.height);
        drawSun();
        drawMountains();
        drawTree(new Ententeich.Vector(300, 530), 70, 20, 40);
        drawLake();
        drawHouse();
    }
    function drawSun() {
        //console.log("Sun");
        let r1 = 50;
        let r2 = 150;
        let gradient = Ententeich.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 80%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Ententeich.crc2.save();
        Ententeich.crc2.translate(70, 70);
        Ententeich.crc2.fillStyle = gradient;
        Ententeich.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function drawMountains() {
        //console.log("Mountains");
        let color = "#aaaaaa";
        //Berg 1 zeichnen
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.translate(0, 450);
        Ententeich.crc2.fillStyle = color;
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(-250, 0);
        Ententeich.crc2.lineTo(390, 0);
        Ententeich.crc2.lineTo(390, -60);
        Ententeich.crc2.lineTo(310, -120);
        Ententeich.crc2.lineTo(220, -65);
        Ententeich.crc2.lineTo(150, -100);
        Ententeich.crc2.lineTo(70, -70);
        Ententeich.crc2.lineTo(-50, -120);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
        //Berg 2 zeichnen
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.translate(0, 450);
        Ententeich.crc2.fillStyle = "grey";
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(-250, 0);
        Ententeich.crc2.lineTo(390, 0);
        Ententeich.crc2.lineTo(390, -50);
        Ententeich.crc2.lineTo(310, -100);
        Ententeich.crc2.lineTo(220, -55);
        Ententeich.crc2.lineTo(150, -80);
        Ententeich.crc2.lineTo(70, -60);
        Ententeich.crc2.lineTo(-50, -110);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function pseudoRandom(seed) {
        let value = seed;
        return function () {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }
    Ententeich.pseudoRandom = pseudoRandom;
    function drawTree(position, trunkHeight, trunkWidth, crownRadius) {
        // Stamm zeichnen
        Ententeich.crc2.fillStyle = "brown";
        Ententeich.crc2.fillRect(position.x - trunkWidth / 2, position.y, trunkWidth, -trunkHeight);
        // Krone zeichnen
        Ententeich.crc2.fillStyle = "green";
        Ententeich.crc2.beginPath();
        Ententeich.crc2.arc(position.x, position.y - trunkHeight, crownRadius, 0, Math.PI * 2);
        Ententeich.crc2.fill();
    }
    function drawLake() {
        let centerX = 190;
        let centerY = 630;
        let radiusX = 230;
        let radiusY = 100;
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fillStyle = "darkblue";
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function drawHouse() {
        Ententeich.crc2.save();
        Ententeich.crc2.translate(10, 520); // Position des Hauses festlegen
        Ententeich.crc2.fillStyle = "brown"; // Farbe für das Haus festlegen
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(0, 0); // Startpunkt des Hauses
        // Linien für das Haus zeichnen
        Ententeich.crc2.lineTo(0, -60);
        Ententeich.crc2.lineTo(40, -100);
        Ententeich.crc2.lineTo(80, -60);
        Ententeich.crc2.lineTo(80, 0);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill(); // Fülle das Haus mit Farbe
        Ententeich.crc2.restore();
    }
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=duckPond.js.map