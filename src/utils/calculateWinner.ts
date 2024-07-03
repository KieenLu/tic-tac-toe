export function calculateWinner(
  squares: string[],
  size: number
): string | null {
  const initArray: number[][] = [];

  for (let i = 0; i < size; i++) {
    const row: number[] = [];
    for (let j = 0; j < size; j++) {
      row.push(i * size + j);
    }
    initArray.push(row);
  }

  for (let i = 0; i < size; i++) {
    const col: number[] = [];
    for (let j = 0; j < size; j++) {
      col.push(j * size + i);
    }
    initArray.push(col);
  }

  const checkLine: number[] = [];
  for (let i = 0; i < size; i++) {
    checkLine.push(i * size + i);
  }
  initArray.push(checkLine);

  const checkDiagonal: number[] = [];
  for (let i = 0; i < size; i++) {
    checkDiagonal.push(i * size + (size - 1 - i));
  }
  initArray.push(checkDiagonal);

  for (let i = 0; i < initArray.length; i++) {
    const line = initArray[i];
    const firstSquare = squares[line[0]];
    if (firstSquare) {
      let isWinningLine = true;
      for (let j = 1; j < size; j++) {
        if (squares[line[j]] !== firstSquare) {
          isWinningLine = false;
          break;
        }
      }
      if (isWinningLine) {
        return firstSquare;
      }
    }
  }

  return null;
}
