import "./Modal.css"

function ModalMenu({Component, open, handleAccept, handleClose}){
  

  if(!open) return null;

  const clickAccept = () =>{

  }

  const clickCancel = () =>{


  }

  return(
      <div className="overlay">
        <div className="modalContainer">
          {Component}
        </div>
      </div>
  )
}
export default ModalMenu;