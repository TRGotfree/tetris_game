import { POSITIONS } from "src/app/constantsAndEnums/positions";

export interface IBlock {
    readonly initialPositions: number[][][];
    readonly color: string;
    readonly maxLength: number;
    currentCoordinats: number[][];
}