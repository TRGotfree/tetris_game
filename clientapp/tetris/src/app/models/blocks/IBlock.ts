import { POSITIONS } from "src/app/constantsAndEnums/positions";

export interface IBlock {
    readonly defaultVPosCoordinats: number[][];
    readonly defaultHPosCoordinats: number[][];
    readonly color: string;

    currentPosition: POSITIONS;
    currentCoordinats: number[][];
}