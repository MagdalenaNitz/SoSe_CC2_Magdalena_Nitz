"use strict";
var Ententeich;
(function (Ententeich) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        normalize() {
            let length = Math.sqrt(this.x * this.x + this.y * this.y);
            this.x /= length;
            this.y /= length;
            return this;
        }
    }
    Ententeich.Vector = Vector;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=Vector.js.map