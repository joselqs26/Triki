import './App.css';
import React from "react";

import { useModal } from "./utils/useModal";

import { Board } from "./components/Board";
import { Indicator } from "./components/Indicator";
import { Modal } from "./components/Modal";
import { WinModal } from "./components/WinModal";
import { Footer } from './components/Footer';

function App() {
  const initialValue = ['','','','','','','','',''];


  const [player, setPlayer] = React.useState( 'X' );
  const [winner, setWinner] = React.useState( '' );
  const [boardState, setBoardState] = React.useState(initialValue);

  const { openModal, toggleModal } = useModal();
  
  React.useEffect(() => {
    
    console.log(boardState)

    let winCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [0,4,8]
    ]

    for(let winCombination of winCombinations) {
      const firstPos = winCombination[0];
      const secondPos = winCombination[1];
      const thirdPos = winCombination[2];

      if ( 
        boardState[ firstPos ] !== '' &&
        boardState[ firstPos ] === boardState[ secondPos ] &&
        boardState[ firstPos ] === boardState[ thirdPos ] 
      ) {
        console.log( boardState[ firstPos ] + ' win' );
        setWinner(boardState[ firstPos ]);
        toggleModal();
        break;
      }
    }

    if ( !boardState.includes('') && winner === '' ) {
      toggleModal();
    }

  }, 
  [boardState]);


  const togglePlayer = () => {
    let otherPlayer = (player === 'X' ? 'O' : 'X')
    setPlayer(otherPlayer);
  }

  const onPlay = pos => {

    if ( boardState[pos] === '' ) {
      let boardStateClone = [...boardState];
      boardStateClone[pos] = player;
      setBoardState(boardStateClone);
      togglePlayer();
    }
  }

  const onReset = (event) => {
    event.preventDefault();
    setPlayer( 'X' );
    setWinner( '' );
    setBoardState(initialValue);
  }

  const onAccept = (event) => {
    onReset(event);
    toggleModal();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Triki</h3>
      </header>
      <Indicator player={player} onReset={onReset} />
      <Board boardState={boardState} onPlay={onPlay} player={player} />

      <Modal openModal={openModal}>
        <WinModal onAccept={onAccept} winner={winner} />
      </Modal>
      <Footer />
    </div>
  );
}

export default App;
