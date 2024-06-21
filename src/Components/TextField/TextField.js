//v1.0 06/11/24
import { useState } from "react"
import "./TextField.css"

function TextField({fieldName, getValue, field ={}, maxLength = 128}) {

  const isEmpty = ( string) => {
    if(string.length <= 0)
      return true;
    else return false;
  }

  const setInput = (e) =>{
    e.preventDefault();
    getValue(e.target.value)
  }

  return (
    <div className= {'textField'} >
      <div className=" name">{fieldName + ": "}</div>
      <input id={"valid"} type="text" value={field.value} onChange={setInput}  maxLength={maxLength}/>
      <div className="error">{field.error ? `* ${field.error}` : ""}</div>
      
    </div>
  )

}

export default TextField;