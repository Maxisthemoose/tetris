import { PiecesEnum } from "./GamePieceTypes";
export default class Piece {
  private Piece: PiecesEnum;

  constructor(private p: PiecesEnum) {
    this.Piece = p;
  }

  public get piece() {
    return this.Piece;
  }
}
