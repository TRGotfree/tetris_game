import { IBlock } from "./iBlock";

export class SquareBlock implements IBlock {
    readonly coordinats: number[][] = [[2, 0], [2, 1], [3, 0], [3, 1]];
}