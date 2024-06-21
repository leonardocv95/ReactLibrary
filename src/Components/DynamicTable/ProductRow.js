import "./ProductRow.css"
import Button from "../Button/Button";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin7Line } from "react-icons/ri";

function ProductRow({id, col =[]}){

  const handleDelete = () =>{
    console.log("delete: ", id )

  }
  const handleEdit = () =>{
    console.log("edit: ", id )
  }

  return(
    <div className="ProductRow">
      {
        col.map((att) =>{
          return (
          <div>
            <div className = "p">{att.label}</div>
            <div id={att.value}>{att.value}</div>
          </div>
        )
        })
      }
      <div className="flex-row">
        <Button className="button_icon" name={<GrEdit/>} handleClick={handleEdit}/>
        <Button className="button_icon" name={<RiDeleteBin7Line/>} handleClick={handleDelete}/>
      </div>

     {/* <div id="id">{id}</div>
     <div id="name">{name}</div>
     <div id="description">{description}</div>
     */}
    </div>
  )
}

export default ProductRow;