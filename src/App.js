import React, { useState, useEffect } from 'react';
import './App.css';
import MostraVoltas from './MostraVoltas';
import MostraTempo from './MostraTempo';
import Button from './Button';
import ButtonIniciarParar from './ButtonIniciarParar';

function App() {
  const numMinimoVoltas = 1;
  const [numVoltas, setNumVoltas] = useState(numMinimoVoltas);
  const [tempo, setTempo] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;

    if (running) {
      // guarda referencia do setInterval
      timer = setInterval(() => {
        setTempo(tempoAnterior => tempoAnterior + 1);
      }, 1000);
    }

    // podemos fazer algo ao finalizar o useEffect, nesse caso limparemos o timer
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    }
  }, [running]);

  const aumentarVoltas = () => {
    setNumVoltas(numVoltas + 1);
  }
  const diminuirVoltas = () => {
    if (numVoltas > numMinimoVoltas) setNumVoltas(numVoltas - 1);
  }
  const toggleRunning = () => {
    setRunning(!running);
  }
  const reset = () => {
    setTempo(0);
    setNumVoltas(numMinimoVoltas);
  }

  return (
    <div className="App">
      <MostraVoltas voltas={numVoltas} />

      <Button texto="-" onClick={diminuirVoltas} />
      <Button texto="+" onClick={aumentarVoltas} />

      <MostraTempo tempo={tempo} voltas={numVoltas} />

      <ButtonIniciarParar onClick={toggleRunning} iniciar={running} />
      <Button onClick={reset} texto="Reiniciar" />
    </div>
  );
}

export default App;
