import React, { useState, useEffect } from 'react';
import './App.css';

const MostraVoltas = (props) => {
  return (
    <h1 className="font-weight-bold display-4">
      {props.voltas}
      <p className="lead">Volta(s)</p>
    </h1>
  )
}

const MostraTempo = (props) => {
  const tempo = props.tempo;
  const voltas = props.voltas;
  const tempoPorVolta = tempo / voltas;
  // separa os min dos seg e faz a formatacao colocando o 0 para valores menores que 10
  const minutos = Math.floor(tempo / 60) < 10 ? '0' + Math.floor(tempo / 60) : Math.floor(tempo / 60);
  const segundos = Math.floor(tempo % 60) < 10 ? '0' + Math.floor(tempo % 60) : Math.floor(tempo % 60);
  const minutosVolta = Math.floor(tempoPorVolta / 60) < 10 ? '0' + Math.floor(tempoPorVolta / 60) : Math.floor(tempoPorVolta / 60);
  const segundosVolta = Math.floor(tempoPorVolta % 60) < 10 ? '0' + Math.floor(tempoPorVolta % 60) : Math.floor(tempoPorVolta % 60);

  return (
    <div>
      <h2 className="font-weight-bold display-5 mt-4">
        {`${minutos}:${segundos}`}
        <p className="lead">Tempo total</p>
      </h2>
      <h2 className="font-weight-bold display-5 mt-4">
        {`${minutosVolta}:${segundosVolta}`}
        <p className="lead">Tempo médio por volta</p>
      </h2>
    </div>
  )
}

const Button = (props) => <button className="btn btn-primary" onClick={props.onClick}>{props.texto}</button>

const ButtonIniciarParar = (props) => {
  if(props.iniciar) {
    return <button className="btn btn-warning" onClick={props.onClick}>Parar</button>
  }
  return <button className="btn btn-success" onClick={props.onClick}>Iniciar</button>
}

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
