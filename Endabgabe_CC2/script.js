document.addEventListener("DOMContentLoaded", () => {
    const camera = document.querySelector("a-camera");

    // Kopfbewegung zum Springen oder Ausweichen
    window.addEventListener("deviceorientation", (event) => {
        let tiltForward = event.beta;
        let tiltSideways = event.gamma;

        if (tiltForward > 30) {
            console.log("Springen über Baumstamm!");
            let pos = camera.getAttribute("position");
            camera.setAttribute("position", `${pos.x} ${pos.y + 1} ${pos.z}`);
            setTimeout(() => camera.setAttribute("position", pos), 500);
        }

        if (tiltSideways > 20) {
            console.log("Ausweichen nach rechts!");
            let pos = camera.getAttribute("position");
            camera.setAttribute("position", `${pos.x + 1} ${pos.y} ${pos.z}`);
        }

        if (tiltSideways < -20) {
            console.log("Ausweichen nach links!");
            let pos = camera.getAttribute("position");
            camera.setAttribute("position", `${pos.x - 1} ${pos.y} ${pos.z}`);
        }
    });

    // Klicksteuerung als alternative Aktion
    document.addEventListener("click", () => {
        console.log("Sprint aktiviert!");
        let pos = camera.getAttribute("position");
        camera.setAttribute("position", `${pos.x} ${pos.y} ${pos.z - 2}`);
    });
});
