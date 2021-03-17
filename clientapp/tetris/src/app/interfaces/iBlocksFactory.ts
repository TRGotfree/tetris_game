import { IBlock } from "../models/blocks/IBlock";

export interface IBlocksFactory {
    getBlock(): IBlock;
}