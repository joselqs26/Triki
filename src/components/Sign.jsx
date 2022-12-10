import React from "react";

import '../styles/Sign.css';

function Sign({ pos , sign , onPlay }) {

    const buttonListener = () => {
        onPlay(pos);
    }

  return (
    <button className={`Sign ${ (sign==='X') ? 'Sign--blue' : '' }  ${ (sign==='O') ? 'Sign--red' : '' }`} onClick={buttonListener}>
        {sign}
    </button>
  );
}

export { Sign };
