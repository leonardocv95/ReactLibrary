import "./TextArea.css"
import { useState } from "react";

function TextArea({fieldName, getValue, error}){

  const [value, setValue] = useState("");

  const handleChange = (e) =>
  {
    e.preventDefault();
    const string = e.target.value;
    setValue(string)
    getValue(string);
  }

  return(
    <div className="textarea">
      <div className=" name">{fieldName + ": "}</div>
      <textarea id={error ? 'invalid' : "valid"} value = {value} onChange={handleChange}></textarea>
      <div className="error">{error ? `* ${error}` : ""}</div>
    </div>
  )
}
export default TextArea;