export default function solve(board) {
  solveBoard(board, 0, 0);
  return board;
}

function solveBoard(board, row, col) {
  if (row === 8 && col === 9) {
    return true;
  }

  if (col === 9) {
    row++;
    col = 0;
  }

  if (board[row][col] !== 0) {
    return solveBoard(board, row, col + 1);
  }

  for (let num = 1; num <= 9; num++) {
    if (validPlacement(board, row, col, num)) {
      board[row][col] = num;

      if (solveBoard(board, row, col + 1)) {
        return true;
      }
    }
    board[row][col] = 0;
  }

  return false;
}

function validPlacement(board, row, col, num) {
  //check rows
  for (let i = 0; i < 9; i++)
    if (board[row][i] === num)
      return false;

  //check cols
  for (let i = 0; i < 9; i++)
    if (board[i][col] === num)
      return false;

  //check boxes
  let startRow = row - row % 3, startCol = col - col % 3;

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (board[i + startRow][j + startCol] === num)
        return false;

  return true;
}