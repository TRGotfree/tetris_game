import { IBlock } from "./IBlock";

export class LBlock implements IBlock {
    readonly color: string = "#1976d2";
    readonly horizontalPositionCoordinats: number[][] = [[0, 0], [0, 1], [1, 1], [2, 1]];
    readonly verticalPositionCoordinats: number[][] = [[1, 0], [0, 0], [0, 1], [0, 2]];
}