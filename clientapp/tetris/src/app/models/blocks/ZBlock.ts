import { IBlock } from "./iBlock";

export class ZBlock implements IBlock {
    readonly color: string = "#1976d2";
    readonly coordinats: number[][] = [[1, 0], [2, 0], [2, 1], [3, 1]];
}