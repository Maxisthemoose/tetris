export default class Board {
  private Board: string[][] = [];
  private blankBoard: string = "⚫";

  constructor() {
    this.createInitialBoard();
  }

  private createInitialBoard(): void {
    const array: string[][] = [];

    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 10; j++) {
        this.Board[i][j] = this.blankBoard;
      }
    }
  }

  public get board() {
    return this.Board;
  }

  public render(): string[][] {
    return this.board;
  }
}
