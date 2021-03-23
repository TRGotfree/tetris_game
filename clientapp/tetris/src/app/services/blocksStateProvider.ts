import { Injectable } from "@angular/core";
import { POSITIONS } from "../constantsAndEnums/positions";
import { IBlock } from "../models/blocks/IBlock";

@Injectable({ providedIn: 'root' })
export class BlocksStateProvider {

    private _currentBlock: IBlock;
    private _blockPosition: POSITIONS = POSITIONS.VERTICAL;
    private _coordinats: number[][];

    get currentBlock(): IBlock {
        return this._currentBlock;
    }

    set currentBlock(value: IBlock) {
        this._currentBlock = value;
    }

    set blockCurrentPosition(value: POSITIONS) {
        if (!value || value.length === 0 || !Object.values(POSITIONS).includes(value))
            throw new Error('Couldn\'t set not valid value to \'position\' property setter!');

        this._blockPosition = value;
    }

    get blockCurrentPosition(): POSITIONS {
        return this._blockPosition;
    }

    get blockCurrentCoordinats(): number[][] {
        return this._coordinats;
    }

    set blockCurrentCoordinats(value: number[][]) {
        if (!value || value.length === 0)
            throw new Error('Couldn\'t set empty value to \'coordinats\' property setter!');

        this._coordinats = value;
    }

}