import TextField from "./Components/TextField/TextField"
import TextArea from "./Components/TextArea/TextArea"
import './App.css';
import { useState } from "react";
import FormMenu from "./Components/Form/FormMenu";
import Modal from "./Components/Modal/ModalMenu"
import Button from "./Components/Button/Button";
import Table from "./Components/DynamicTable/DynamicTable";
import ProductoRow from './Components/DynamicTable/ProductRow'



function App() {

  const [status, setStatus ]= useState(false);

  const product = [{
    label: "Id",
    value: "5657F",
    size: 10
  },
  {
    label: "Name",
    value: "Outlet",
    size: 10
  },
  {
    label: "Description",
    value: " sadjkfhasdk jfhas jkhf kjahj",
    size: 10
  }]

  const handleInput = () =>{
    setStatus(!status);
  }

  const handleSubmit = (form) =>{
    setStatus(!status);
    console.log(form)
    //process whit the redux
  }

  return (
    <div className="App">
      {/* <TextField fieldName={"Name"} getValue={handleInput} error={error}/> */}
      {/* <TextArea fieldName={"Description"} getValue={handleInput} error={error}/> */}
      {/* <Modal Component={<FormMenu handleClose={handleInput} handleSubmit ={handleSubmit}/> } open={status} />
      <Button name="click me!" handleClick={handleInput}/> */}
      <ProductoRow id = {3} col={product}/>

    </div>
  );
}

export default App;
