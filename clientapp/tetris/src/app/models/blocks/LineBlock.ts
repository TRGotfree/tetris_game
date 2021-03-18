import { IBlock } from "./iBlock";

export class LineBlock implements IBlock {
    readonly color: string = "#1976d2";
    readonly coordinats: number[][] = [[0, 1], [1, 1], [2, 1], [3, 1]];
}