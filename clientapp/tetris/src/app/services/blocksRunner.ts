import { Injectable } from "@angular/core";
import { EventEmitter } from "events";
import { environment } from "src/environments/environment";
import { DIRECTIONS } from "../constantsAndEnums/directions";
import { POSITIONS } from "../constantsAndEnums/positions";
import { IBlocksRunner } from "../interfaces/iBlocksRunner";
import { IBlock } from "../models/blocks/IBlock";

@Injectable({ providedIn: "root" })
export class BlocksRunner extends EventEmitter implements IBlocksRunner {

    private isStarted: boolean = false;
    private timeout: number = 3000;

    start() {

    }

    stop() {

    }

    increaseSpeed(speed: number) {
        if (isNaN(speed))
            throw new Error('Input parameter \'speed\' for \'increaseSpeed\' is not valid!');

        if (speed > this.timeout)
            throw new Error('Speed value to increase couldn\'t be larger then current speed');

        this.timeout = this.timeout - speed;
    }

    changePosition(block: IBlock, direction: DIRECTIONS = DIRECTIONS.DOWN): IBlock {

        if (!block.currentCoordinats || block.currentCoordinats.length === 0)
            throw new Error('Input parameter \'currentCoordinats\' for \'changePosition\' is empty!');

        if (!direction || direction == DIRECTIONS.DOWN) {
            for (const row of block.currentCoordinats) {
                if (row[0] >= environment.gameFieldMaxLines)
                    continue;

                row[0] += 1;
            }

            return block;
        }

        if (direction == DIRECTIONS.LEFT) {
            for (const row of block.currentCoordinats) {
                if (row[1] == 0)
                    continue;

                row[1] -= 1;
            }

            return block;
        }

        if (direction == DIRECTIONS.RIGHT) {
            for (const row of block.currentCoordinats) {
                if (row[1] >= environment.gameFieldMaxColumns)
                    continue;

                row[1] += 1;
            }

            return block;
        }

        if (direction == DIRECTIONS.ROTATE) {
            for (const row of block.currentCoordinats) {

            }
        }
    }

    private run() {
        setInterval(() => {

        }, this.timeout)
    }


    private rotate(block: IBlock) {
        if (!block)
            throw new Error('Input parameter \'block\' for \'rotate\' is null or undefined!');

        if (block.currentPosition == POSITIONS.HORIZONTAL) {

            for (let i = 0; i < block.currentCoordinats.length; i++) {

                if (block.defaultVPosCoordinats[i][0] + block.currentCoordinats[i][0] > environment.gameFieldMaxColumns)
                    block.currentCoordinats[i][0] = (block.defaultVPosCoordinats[i][0] + block.currentCoordinats[i][0]) - ((block.defaultVPosCoordinats[i][0] + block.currentCoordinats[i][0]) - environment.gameFieldMaxColumns) - 1;
                else
                    block.currentCoordinats[i][0] = block.defaultVPosCoordinats[i][0] + block.currentCoordinats[i][0] - 1;

                if (block.defaultVPosCoordinats[i][1] + block.currentCoordinats[i][1] > environment.gameFieldMaxLines)
                    block.currentCoordinats[i][0] = ((block.defaultVPosCoordinats[i][1] + block.currentCoordinats[i][1]) - ((block.defaultVPosCoordinats[i][1] + block.currentCoordinats[i][1]) - environment.gameFieldMaxLines)) - 1;
            }

            block.currentPosition = POSITIONS.VERTICAL;

        } else {

            for (let i = 0; i < block.currentCoordinats.length; i++) {

                if (block.defaultHPosCoordinats[i][0] + block.currentCoordinats[i][0] > environment.gameFieldMaxColumns)
                    block.currentCoordinats[i][0] = (block.defaultHPosCoordinats[i][0] + block.currentCoordinats[i][0]) - ((block.defaultHPosCoordinats[i][0] + block.currentCoordinats[i][0]) - environment.gameFieldMaxColumns) - 1;
                else
                    block.currentCoordinats[i][0] = block.defaultHPosCoordinats[i][0] + block.currentCoordinats[i][0] - 1;

                if (block.defaultHPosCoordinats[i][1] + block.currentCoordinats[i][1] > environment.gameFieldMaxLines)
                    block.currentCoordinats[i][0] = ((block.defaultHPosCoordinats[i][1] + block.currentCoordinats[i][1]) - ((block.defaultVPosCoordinats[i][1] + block.currentCoordinats[i][1]) - environment.gameFieldMaxLines)) - 1;
            }

            block.currentPosition = POSITIONS.HORIZONTAL;
        }
    }
}