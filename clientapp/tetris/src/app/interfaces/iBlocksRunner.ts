import { DIRECTIONS } from "../constantsAndEnums/directions";
import { IBlock } from "../models/blocks/IBlock";

export const IBLOCKS_RUNNER = 'IBlocksRunner';

export interface IBlocksRunner {
    start();
    stop();
    increaseSpeed(speed: number);
    changePosition(block: IBlock, direction: DIRECTIONS): IBlock;
}