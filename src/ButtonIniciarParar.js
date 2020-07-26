import React from 'react';

const ButtonIniciarParar = (props) => {
    if (props.iniciar) {
        return <button className="btn btn-warning" onClick={props.onClick}>Parar</button>
    }
    return <button className="btn btn-success" onClick={props.onClick}>Iniciar</button>
}

export default ButtonIniciarParar;