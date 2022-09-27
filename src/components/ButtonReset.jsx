import React from "react";

function ButtonReset(props){
    function handleclick(){
            props.clicked()
    }
    return(
        <button onClick={handleclick}>Click here to reset</button>
    )
}

export default ButtonReset;