import Board from "./Helper/Board";
import GamePieceTypes from "./Helper/GamePieceTypes";

export default class Main {
  // Game board should be a 2d array with height of 20, width of 10
  private gameBoard: Board = new Board();

  constructor() {}

  public async start(): Promise<void> {}

  private async gameLoop(): Promise<void> {}
}
