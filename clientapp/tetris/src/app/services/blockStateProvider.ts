import { POSITIONS } from "../constantsAndEnums/positions";
import { IBlock } from "../models/blocks/IBlock";

export class BlockStateProvider {

    private readonly _block: IBlock;
    private _blockPosition: POSITIONS = POSITIONS.VERTICAL;
    private _coordinats: number[][];

    constructor(block: IBlock) {
        if (!block)
            throw new Error('Input parameter \'block\' for \'BlockStateProvider\' constructor is null or undefined!');
        this._block = block;
        this._coordinats = block.verticalPositionCoordinats;
    }

    get block(): IBlock {
        return this._block;
    }

    set position(value: POSITIONS) {
        if (!value || value.length === 0 || !Object.values(POSITIONS).includes(value))
            throw new Error('Couldn\'t set not valid value to \'position\' property setter!');

        this._blockPosition = value;
    }

    get position(): POSITIONS {
        return this._blockPosition;
    }

    get coordinats(): number[][] {
        return this._coordinats;
    }

    set coordinats(value: number[][]) {
        if (!value || value.length === 0)
            throw new Error('Couldn\'t set empty value to \'coordinats\' property setter!');

        this._coordinats = value;
    }

}