namespace Ententeich {
    export class Moveable {
        x: number;
        y: number;
        color: string;

        constructor (_x:number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }

    move(): void {
        console.log ("moveable move");
    }
    draw() {

    }
    }
}