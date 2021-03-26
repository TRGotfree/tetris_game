import { POSITIONS } from "src/app/constantsAndEnums/positions";
import { IBlock } from "./iBlock";

export class ZBlock implements IBlock {

    constructor() {
    }

    currentCoordinats: number[][];
    currentInitialPositionIndex: number;
    
    readonly color: string = "#1976d2";
    readonly maxLength: number = 2;
    readonly initialPositions: number[][][] = [
        [[2, -1], [2, -2], [1, -2], [1, -3]],
        [[1, -2], [2, -2], [2, -3], [3, -3]],
        [[2, -1], [2, -2], [1, -2], [1, -3]],
        [[1, -2], [2, -2], [2, -3], [3, -3]] 
    ];
}