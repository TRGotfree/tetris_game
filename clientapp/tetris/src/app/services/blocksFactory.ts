import { Injectable } from "@angular/core";
import { IBlocksFactory } from "../interfaces/iBlocksFactory";
import { IBlock } from "../models/blocks/IBlock";
import { LBlock } from "../models/blocks/LBlock";
import { LineBlock } from "../models/blocks/LineBlock";
import { ReverseLBlock } from "../models/blocks/ReverseLBlock";
import { ReverseZBlock } from "../models/blocks/ReverseZBlock";
import { SquareBlock } from "../models/blocks/squareBlock";
import { TankBlock } from "../models/blocks/tankBlock";
import { ZBlock } from "../models/blocks/ZBlock";

@Injectable({ providedIn: "root" })
export class BlocksFactory implements IBlocksFactory {

    private readonly awailableBlocks = [new LineBlock(), new ZBlock(), new ReverseZBlock(), new LBlock(), new ReverseLBlock(), new SquareBlock(), new TankBlock()]

    getBlock(): IBlock {
        const rnd = Math.floor(Math.random() * Math.floor(this.awailableBlocks.length - 1));
        return this.awailableBlocks[rnd];
    }

    
}