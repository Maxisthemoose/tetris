import Board from "./Helper/Board";
import { PiecesEnum as p } from "./Helper/GamePieceTypes";
import Piece from "./Helper/Piece";

export default class Main {
  // Game board should be a 2d array with height of 20, width of 10
  private static gameBoard: Board = new Board();
  private static bag: Piece[] = [];
  private static secondBag: Piece[] = [];

  private static currentPiece: Piece;

  // constructor() {}

  public static async start(): Promise<void> {
    this.fillBag(this.bag);
    this.fillBag(this.secondBag);
    this.updateCurrentPiece();

    setInterval(() => {
      this.gameLoop();
    }, 100);
  }

  private static async gameLoop(): Promise<void> {
    this.gameBoard.render(this.currentPiece);
  }

  private static fillBag(bag: Piece[]): void {
    const arr: p[] = [p.I, p.J, p.L, p.O, p.S, p.T, p.Z];

    for (let i = 0; i < 7; i++) {
      bag.push(
        new Piece(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]),
      );
    }
  }

  private static updateCurrentPiece(): void {
    this.currentPiece = this.bag[0];
    this.bag.shift();
  }
}
