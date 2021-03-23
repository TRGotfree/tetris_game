import { POSITIONS } from "src/app/constantsAndEnums/positions";
import { IBlock } from "./IBlock";

export class LBlock implements IBlock {

    constructor() {
        this.currentPosition = POSITIONS.VERTICAL;
        this.currentCoordinats = this.defaultVPosCoordinats;
    }

    currentPosition: POSITIONS;
    currentCoordinats: number[][];
    readonly color: string = "#1976d2";
    readonly defaultHPosCoordinats: number[][] = [[0, 0], [0, 1], [1, 1], [2, 1]];
    readonly defaultVPosCoordinats: number[][] = [[1, 0], [0, 0], [0, 1], [0, 2]];
}