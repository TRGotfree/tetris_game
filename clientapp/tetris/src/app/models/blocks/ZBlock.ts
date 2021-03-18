import { IBlock } from "./iBlock";

export class ZBlock implements IBlock {
    readonly color: string = "#1976d2";
    readonly horizontalPositionCoordinats: number[][] = [[0, 1], [1, 1], [1, 0], [2, 0]];
    readonly verticalPositionCoordinats: number[][] = [[0, 0], [0, 1], [1, 1], [1, 2]];
}