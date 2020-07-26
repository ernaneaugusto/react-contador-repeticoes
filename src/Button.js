import React from 'react';

const Button = (props) => <button className="btn btn-primary" onClick={props.onClick}>{props.texto}</button>

export default Button;