import { IBlock } from "./IBlock";

export class TankBlock implements IBlock {
    readonly color: string = "#1976d2";
    readonly horizontalPositionCoordinats: number[][] = [[0, 0], [1, 0], [2, 0], [1, 1]];
    readonly verticalPositionCoordinats: number[][] = [[1, 0], [1, 1], [1, 2], [0, 1]];
}