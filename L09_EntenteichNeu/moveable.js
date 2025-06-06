"use strict";
var Ententeich;
(function (Ententeich) {
    class Moveable {
        x;
        y;
        color;
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        move() {
            console.log("moveable move");
        }
        draw() {
        }
    }
    Ententeich.Moveable = Moveable;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=moveable.js.map