import { DIRECTIONS } from "../constantsAndEnums/directions";

export const IBLOCKS_RUNNER = 'IBlocksRunner';

export interface IBlocksRunner {
    start();
    stop();
    increaseSpeed(speed: number);
    changePosition(currentCoordinats: number[][], direction: DIRECTIONS): number[][];
}