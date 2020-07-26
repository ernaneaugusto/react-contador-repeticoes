import React from "react";

const MostraVoltas = (props) => {
    return (
        <h1 className="font-weight-bold display-4">
            {props.voltas}
            <p className="lead">Volta(s)</p>
        </h1>
    )
}

export default MostraVoltas;