import React from 'react';
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

const Button = (props) => <button className="btn btn-primary">{props.texto}</button>

function App() {
  return (
    <div className="App">
      <MostraVoltas voltas="12" />

      <Button texto="-" />
      <Button texto="+" />
      
      <MostraTempo tempo="01:45" />
      
      <Button texto="Iniciar" />
      <Button texto="Reiniciar" />
    </div>
  );
}

export default App;
