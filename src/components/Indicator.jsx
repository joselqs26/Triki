import React from "react";

import '../styles/Indicator.css';
import '../styles/Sign.css';

function Indicator({ player }) {

  return (
    <div className='indicator'>
        <span className="indicator-label">
            En turno el { (player === 'X') ? 'Jugador 1 :' : 'Jugador 2 :' }
        </span>
        <span className={`IndicatorSign ${ (player==='X') ? 'Sign--blue' : '' }  ${ (player==='O') ? 'Sign--red' : '' }`}>
                {player}
            </span>
    </div>
  );
}


export { Indicator };
