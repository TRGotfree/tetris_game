import { IBlock } from "./iBlock";

export class SquareBlock implements IBlock {
    readonly color: string = "#1976d2";
    readonly coordinats: number[][] = [[2, 0], [2, 1], [3, 0], [3, 1]];
}