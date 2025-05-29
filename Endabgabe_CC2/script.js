document.addEventListener("DOMContentLoaded", () => {
    const camera = document.querySelector("a-camera");

    // Hindernisse nach und nach erscheinen lassen
    setTimeout(() => {
        document.getElementById("baumstamm").setAttribute("visible", true);
        console.log("Baumstamm erscheint!");
    }, 2000);

    setTimeout(() => {
        document.getElementById("fels").setAttribute("visible", true);
        console.log("Felsen erscheint!");
    }, 4000);

    setTimeout(() => {
        document.getElementById("fluss").setAttribute("visible", true);
        console.log("Fluss erscheint!");
    }, 6000);

    setTimeout(() => {
        document.getElementById("brücke").setAttribute("visible", true);
        console.log("Brücke erscheint!");
    }, 8000);

    // Kopfbewegung für Sprint, Springen & Ausweichen
    window.addEventListener("deviceorientation", (event) => {
        let tiltForward = event.beta;
        let tiltSideways = event.gamma;

        if (tiltForward > 30) {
            console.log("Springen über Hindernis!");
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

    // Klick zum Sprinten
    document.addEventListener("click", () => {
        console.log("Sprint aktiviert!");
        let pos = camera.getAttribute("position");
        camera.setAttribute("position", `${pos.x} ${pos.y} ${pos.z - 2}`);
    });
});
