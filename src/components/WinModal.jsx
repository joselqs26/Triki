import React from 'react';
import '../styles/WinModal.css'

function WinModal({ onAccept , winner }) {
    
    return(
        <div className='WinModal'>
            <form onSubmit={onAccept} >
                <div className='WinModal-title'>
                    {
                        (winner === '') ? <h3>¡Empate!</h3> : <h3>¡Victoria!</h3>
                    }
                </div>
                <span className='WinModal-player'>
                    {
                        (winner === '') 
                        ? 'El juego ha concluido en empate'
                        : `El ${ (winner === 'X') ?  'Jugador 1' : 'Jugador 2' } ha ganado`
                    }
                </span>
                <button className='boton_submit' type='submit' >Aceptar</button>
            </form>
        </div>
    )
}

export { WinModal };