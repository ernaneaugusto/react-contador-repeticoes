import React, { useState } from 'react';
import './App.css';

const MostraVoltas = (props) => {
  return (
    <h1 className="font-weight-bold display-4">
      {props.voltas}
      <p className="lead">Voltas</p>
    </h1>
  )
}

const MostraTempo = (props) => {
  return (
    <h2 className="font-weight-bold display-5 mt-4">
      {props.tempo}
      <p className="lead">Tempo médio por volta</p>
    </h2>
  )
}

const Button = (props) => <button className="btn btn-primary" onClick={props.onClick}>{props.texto}</button>

function App() {
  const [numVoltas, setNumVoltas] = useState(12);

  const aumentarVoltas = () => {
    setNumVoltas(numVoltas + 1);
  }
  const diminuirVoltas = () => {
    setNumVoltas(numVoltas - 1);
  }

  return (
    <div className="App">
      <MostraVoltas voltas={numVoltas} />

      <Button texto="-" onClick={diminuirVoltas} />
      <Button texto="+" onClick={aumentarVoltas} />

      <MostraTempo tempo="01:45" />

      <Button texto="Iniciar" />
      <Button texto="Reiniciar" />
    </div>
  );
}

export default App;
