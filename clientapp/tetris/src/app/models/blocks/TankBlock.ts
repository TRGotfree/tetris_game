import { POSITIONS } from "src/app/constantsAndEnums/positions";
import { IBlock } from "./IBlock";

export class TankBlock implements IBlock {

    constructor() {
    }

    currentCoordinats: number[][];
    currentInitialPositionIndex: number;

    readonly color: string = "#1976d2";
    readonly maxLength: number = 3;
    readonly initialPositions: number[][][] = [
        [[1, -1], [2, -2], [1, -2], [1, -3]],
        [[1, -2], [2, -2], [3, -2], [2, -3]],
        [[2, -1], [2, -2], [2, -3], [1, -2]],
        [[1, -2], [2, -2], [3, -2], [2, -1]]
    ];
}