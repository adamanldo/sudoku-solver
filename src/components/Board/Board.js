import React, {useState} from 'react'
import './Board.css'
import { getNewEasyBoard } from '../../utils/getRandomBoards'

const Board = () => {
    const [board, setBoard] = useState(createBoard);

    //const renderNewEasyBoard = ()

    return (
        <>
            <div className="sudokuBoard">
                {board.map((row, rowIdx) => (
                    <div key={row} className="row">
                        {row.map((cellVal, cellIdx) => {
                            return <div key={cellVal} className="cell">{cellVal}</div>;
                        })}
                    </div>
                ))}
            </div>
            <div className="newEasyBoard">
                <button onClick={getNewEasyBoard}>New Easy Board</button>
            </div>
        </>
    )
}

const createBoard = () => {
    const rows = 'ABCDEFGHI';
    const digits = '123456789';
    const board = [];
    for (let row = 0; row < 9; row++) {
        const currentRow = [];
        for (let col = 0; col < 9; col++) {
            currentRow.push(rows[row] + digits[col])
        }
        board.push(currentRow);
    }
    return board;
}

export default Board;