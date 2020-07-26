import React from "react";

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

export default MostraTempo;