import { useState } from "react"

function Imagen({title, validate, alt, src}) {

  const [text, setText] = useState();


  const setInput = (e) =>{
    
   
  }

  return (
    <div className= "Imagen">
      <img  src={src}
            alt={alt}
            height={50}
            width={50}
            />
    </div>
  )

}

export default Imagen;