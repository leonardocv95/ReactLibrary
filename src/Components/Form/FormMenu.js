import TextArea from "../TextArea/TextArea";
import TextField from "../TextField/TextField";
import Button from "../Button/Button"
import { useForm } from "../../Hooks/UseForm/useForm";
import { isNumeric, isEmpty } from "validator";

import "./FormMenu.css"

export default function FormMenu({handleClose, handleSubmit}){

  const [form, getField, inputChange, isValidForm] = useForm([{
    name: 'name',
    value: '',
    error: ''
  },
  {
    name: 'lastName',
    value: '',
    error: 'l'
  },
  {
    name: 'phone',
    value: '',
    error: 'p'
  },
  {
    name: 'description',
    value: '',
    error: ''
  }]);

  const nameField = getField("name");
  const lastnameField = getField("lastName");
  const phoneField = getField("phone");
  const descriptionField = getField("description");

  const validateForm= (items) => {
    

  }

  // function getValue(string = nameField.value){

  //   inputChange({
  //     name: 'name',
  //     value: string,
  //     error: isEmpty(string) ? 'this field need to be filled' : ''
  //   })
  // }

  const handleNameInput = (value = nameField.value) => {
    console.log("name: ",value);
    inputChange({
      name: 'name',
      value: value,
      error: isEmpty(value) ? 'this field need to be filled' : ''
    })

    console.log("form:",  nameField.error)
    console.log("form:",  getField("name").error)
  }

  const handleLastNameInput = (value = lastnameField.value) => {
    console.log("lname: ",value);
     inputChange({
      name: 'lastName',
      value: value,
      error: isEmpty(value) ? 'this field need to be filled' : ''
    })
  }
  
  const handlePhoneNumberInput = (value = phoneField.value) => {

    console.log("Pnum: ",value, " L: ", value.length);

    let errol = "";
    if(isEmpty(value)){
      errol ="Phone number is requiered"
      console.log("Phone number is requiered")
    }else if(!isNumeric(value)){
      errol = "only number are allowed"
    }else if(value.length < 10 ){
      errol = "insert a valid Phone number"
    }
    console.log(errol)
    
    inputChange({
      name: 'phone',
      value: value,
      error: errol
    })

    console.log("is: ", phoneField.error)
    
  }

  const handleDescriptionInput = (value = descriptionField.value) => {

    inputChange({
      name: 'description',
      value: value,
      error: isEmpty(value) ? 'this field need to be filled' : ''
    })
  }

  const handleError = (error) =>{
    // setError(error);
  }

  const handleAccept = () =>{

    handleNameInput();
    handleLastNameInput();
    handlePhoneNumberInput();
    handleDescriptionInput();

    if(isValidForm(4)){
      console.log("submit")
      handleSubmit(form)
    }else{
      console.log("invalid")
    }

  }
  const handleCancel = () =>{
    console.log("cancel")
    handleClose();
  }

  return (
    <div className="form">
      
      My Form
   
      <TextField fieldName={"Name"} getValue={handleNameInput} field={nameField} maxLength={16}/>
      <TextField fieldName={"Last Name"} getValue={handleLastNameInput} field={lastnameField}  maxLength={16}/>
      <TextField fieldName={"Phone Number"} getValue={handlePhoneNumberInput} field={phoneField}  maxLength={10}/>
      <TextArea fieldName={"Description"} getValue={handleDescriptionInput} field={descriptionField} error={descriptionField.error}/>

      <div className="footer">
        <Button name={"Accept"} handleClick={handleAccept}/>
        <Button name={"Cancel"} handleClick={handleCancel}/>
      </div>

    </div>
  )

}