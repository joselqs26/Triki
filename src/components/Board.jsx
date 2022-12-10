import React from "react";
import { Sign } from './Sign';

import '../styles/Board.css';

function Board({ boardState , onPlay , player }) {

    const renderSign = pos => {
        let sign = boardState[ pos ];
        return <Sign pos={pos} sign={sign} onPlay={onPlay}/>
    }

  return (
    <div className='board'>
        <div className='board-row'>
        {renderSign(0)}
        {renderSign(1)}
        {renderSign(2)}
        </div>
        <div className='board-row'>
        {renderSign(3)}
        {renderSign(4)}
        {renderSign(5)}
        </div>
        <div className='board-row'>
        {renderSign(6)}
        {renderSign(7)}
        {renderSign(8)}
        </div>
    </div>
  );
}

export { Board };
