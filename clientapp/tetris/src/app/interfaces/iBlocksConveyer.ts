export interface IBlocksConveyer {
    start();
    stop();
    increaseSpeed(speed: number);
}