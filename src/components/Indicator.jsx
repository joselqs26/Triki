import React from "react";

import '../styles/Indicator.css';
import '../styles/Sign.css';

function Indicator({ player , onReset }) {

    return (
      <div className='indicator'>
        <div className='indicator-container'>
            <span className="indicator-label">
                En turno el { (player === 'X') ? 'Jugador 1 :' : 'Jugador 2 :' }
            </span>
            <span className={`IndicatorSign ${ (player==='X') ? 'Sign--blue' : '' } ${ (player==='O') ? 'Sign--red' : '' }`}>
                {player}
            </span>
        </div>
        <button className='reset-button' onClick={onReset}>Reiniciar</button>
      </div>
    );
}


export { Indicator };
