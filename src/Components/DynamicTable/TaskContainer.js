import TaskUpdate from "./TaskUpdate";
import CreateTask from "./CreateTask";
import { useState } from "react";
import ProductRow from "./ProductRow.js"
 
function  StackContainer({items}) {

  const [active, setActive] =  useState(false);

  const toggleStatus= () =>{
    setActive(!active);
  }

  return (
    <div className="stackContainer">
      {
        items.map((task)=>{
         
          return task
        })
      }

    </div>
  )
}

export default StackContainer;