import "./Button.css"

function Button ({name = "Default", className = "button", handleClick}){
  return(
    <div className={className} onClick={handleClick}>
      {name}
    </div>
  )
}

export default Button;