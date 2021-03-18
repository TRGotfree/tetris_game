import { IBlock } from "./iBlock";

export class ReverseLBlock implements IBlock {
    readonly color: string = "#1976d2";
    coordinats: number[][] = [[1, 1], [2, 1], [3, 1], [3, 0]];
}