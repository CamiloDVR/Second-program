import "./Inputs.css"
import React from "react";
interface InputsProps{
    texto:string;
    type:string;
}

const Inputs:React.FC<InputsProps>= ({texto,type})=>{
    return(
        <input type={type} placeholder={texto}></input>
    );
        


}
export default Inputs;