import { Vector2 } from "./Vector2";

export class Hex {
    public points: Vector2[];

    constructor(center: Vector2, size: number) {
        this.points = [];
        for (let i = 0; i < 6; i++) {
            this.points.push(Hex.hexCorner(center, size, i));
        }
    }

    private static hexCorner(center: Vector2, size: number, i: number): Vector2 {
        const angleDeg = 60 * i - 30;
        const angleRad = Math.PI / 180 * angleDeg;
        return new Vector2(center.x + size * Math.cos(angleRad), center.y + size * Math.sin(angleRad));
    }
}