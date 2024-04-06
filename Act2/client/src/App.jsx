import React, { useState } from 'react';
import './App.css';

function Button({ text, onClick, esClick }) {
  const className = esClick ? 'btnClick' : 'btnReiniciar';
  return <button className={className} onClick={onClick}>{text}</button>;
}

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const incrementNum = () => {
    console.log('Incrementant el número');
    setNumClicks(numClicks + 1);
  };

  const resetNum = () => {
    console.log('Reiniciant el número');
    setNumClicks(0);
  };

  return (
    <div className="App">
      <p>Comptador: {numClicks}</p>
      <Button text="Clic" onClick={incrementNum} esClick={true} />
      <Button text="Reiniciar" onClick={resetNum} esClick={false} />
    </div>
  );
}

export default App;