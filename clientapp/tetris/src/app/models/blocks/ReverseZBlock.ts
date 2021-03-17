import { IBlock } from "./iBlock";

export class ReverseZBlock implements IBlock {
    readonly coordinats: number[][] = [[1, 1], [2, 1], [2, 0], [3, 0]];
}