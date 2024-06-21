//v1.0 06/11/24
import { useState } from "react"
import "./TextField.css"

function TextField({fieldName, getValue, error, maxLength = 128}) {

  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);

  const isEmpty = ( string) => {
    if(string.length <= 0)
      return true;
    else return false;
  }

  const setInput = (e) =>{

    e.preventDefault();
    const string = e.target.value;
    setValue(string)
    getValue(string);
  }


  return (
    <div className= {'textField'} >
      <div className=" name">{fieldName + ": "}</div>
      <input id={valid} type="text" value={value} onChange={setInput}  maxLength={maxLength}/>
      <div className="error">{error ? `* ${error}` : ""}</div>
    </div>
  )

}

export default TextField;