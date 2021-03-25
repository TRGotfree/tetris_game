import { POSITIONS } from "src/app/constantsAndEnums/positions";
import { IBlock } from "./iBlock";

export class LineBlock implements IBlock {

    constructor() {
    }

    currentCoordinats: number[][];
    readonly color: string = "#1976d2";
    readonly maxLength: number = 4;
    readonly initialPositions: number[][][] = [
        [[1, -1], [1, -2], [1, -3], [1, -4]],
        [[1, -2], [2, -2], [3, -2], [4, -2]],
        [[1, -1], [1, -2], [1, -3], [1, -4]],
        [[1, -2], [2, -2], [3, -2], [4, -2]]
    ];
}