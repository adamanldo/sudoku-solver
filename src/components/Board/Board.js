import React, { useState } from 'react'
import './Board.css'
import { getNewEasyBoardString, getNewHardBoardString } from '../../utils/getRandomBoards.js'
import solve from '../Solver/Solver.js'

const Board = () => {
  const [board, setBoard] = useState(createBoard(getNewEasyBoardString()));

  function displayBlankIfZero(cellVal) {
    if (cellVal !== 0) {
      return cellVal
    }
  }

  return (
    <>
      <div className="sudokuBoard">
        {board.map((row, rowIdx) => (
          <div key={`row-${rowIdx}`} className="row">
            {row.map((cellVal, cellIdx) => {
              return <div key={`cell-${rowIdx}${cellIdx}`} id={`cell-${rowIdx}${cellIdx}`} className="cell">
                {/*if the board value is zero, display an empty space*/}
                {displayBlankIfZero(cellVal)}
              </div>;
            })}
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setBoard(createBoard(getNewEasyBoardString()))} class="boardButtons">New Easy Board</button>
        <button onClick={() => setBoard(createBoard(getNewHardBoardString()))} class="boardButtons">New Hard Board</button>
        <button onClick={() => setBoard(solveBoard(board))} class="boardButtons">Solve</button>
      </div>
    </>
  )
}

const createBoard = (newBoardString) => {
  let newBoardIndex = 0
  const board = [];
  for (let row = 0; row < 9; row++) {
    const currentRow = [];
    for (let col = 0; col < 9; col++) {
      currentRow.push(parseInt(newBoardString[newBoardIndex]))
      newBoardIndex += 1
    }
    board.push(currentRow);
  }
  return board;
}

const solveBoard = board => {
  const newBoard = board.slice();
  solve(newBoard);
  return newBoard;
}

export default Board;