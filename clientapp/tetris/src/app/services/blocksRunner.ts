import { Injectable } from "@angular/core";
import { EventEmitter } from "events";
import { environment } from "src/environments/environment";
import { DIRECTIONS } from "../constantsAndEnums/directions";
import { IBlocksRunner } from "../interfaces/iBlocksRunner";

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

    changePosition(currentCoordinats: number[][], direction: DIRECTIONS = DIRECTIONS.DOWN): number[][] {

        if (!currentCoordinats || currentCoordinats.length === 0)
            throw new Error('Input parameter \'currentCoordinats\' for \'changePosition\' is empty!');

        if (!direction || direction == DIRECTIONS.DOWN) {
            for (const row of currentCoordinats) {
                if (row[0] >= environment.gameFieldMaxLines)
                    continue;

                row[0] += 1;
            }

            return currentCoordinats;
        }

        if (direction == DIRECTIONS.LEFT) {
            for (const row of currentCoordinats) {
                if (row[1] == 0)
                    continue;

                row[1] -= 1;
            }

            return currentCoordinats
        }

        if (direction == DIRECTIONS.RIGHT) {
            for (const row of currentCoordinats) {
                if (row[1] >= environment.gameFieldMaxColumns)
                    continue;

                row[1] += 1;
            }

            return currentCoordinats
        }

        if (direction == DIRECTIONS.ROTATE) {
            for (const row of currentCoordinats) {
                
            }
        }
    }

    private run() {
        setInterval(() => {

        }, this.timeout)
    }


    private rotate(currentCoordinats: number[][]) {
        if (!currentCoordinats || currentCoordinats.length === 0)
            throw new Error('Input parameter \'currentCoordinats\' for \'rotate\' is null or undefined!');

        
    }
}