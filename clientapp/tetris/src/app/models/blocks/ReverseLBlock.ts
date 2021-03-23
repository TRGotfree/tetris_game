import { POSITIONS } from "src/app/constantsAndEnums/positions";
import { IBlock } from "./iBlock";

export class ReverseLBlock implements IBlock {

    constructor() {
        this.currentPosition = POSITIONS.VERTICAL;
        this.currentCoordinats = this.defaultVPosCoordinats;
    }

    currentPosition: POSITIONS;
    currentCoordinats: number[][];
    readonly color: string = "#1976d2";
    readonly defaultHPosCoordinats: number[][] = [[0, 1], [0, 0], [1, 0], [2, 0]];
    readonly defaultVPosCoordinats: number[][] = [[0, 0], [1, 0], [1, 1], [1, 2]];
}