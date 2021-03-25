import { POSITIONS } from "src/app/constantsAndEnums/positions";
import { IBlock } from "./iBlock";

export class SquareBlock implements IBlock {

    constructor() {
    }

    currentCoordinats: number[][];
    readonly color: string = "#1976d2";
    readonly maxLength: number = 2;
    readonly initialPositions: number[][][] = [
        [[1, -1], [2, -1], [1, -1], [2, -2]],
        [[1, -1], [2, -1], [1, -1], [2, -2]],
        [[1, -1], [2, -1], [1, -1], [2, -2]],
        [[1, -1], [2, -1], [1, -1], [2, -2]]
    ];
}