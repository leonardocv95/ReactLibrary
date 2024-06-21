import TextField from '../../Form/TextField'
import Button from '../../SideMenu/Button';
import Imagen from '../../Imagen/Imagen'
import { useState } from 'react';
import "./NewProduct.css"
import TextArea from '../../TextArea/TextArea';
import { useForm } from '../../CustomHooks/useFormPro';

function NewProduct({submit, closeModal}){

  const [valid, setValid] = useState(false)
  const [error, setError] = useState("")
  
  const [getField, inputChange, isValidForm] = useForm([{valid: false}]);

  const SubmitForm = () => {

    if(isValidForm){
      submit({
        name:getField("name").value,
        description:getField("description").value
      })
    }
  }

  const validateForm= (items) => {
    

  }

  const validateName = (value) => {
    inputChange({
      name: "name",
      value: value.value,
      valid: value.valid
    })
  }
  
  const validateDescription = (value) => {
    inputChange({
      name: "description",
      value: value.value,
      valid: value.valid
    })
  }

  
  const handleError = (error) =>{
    setError(error);
  }

  const handleAccept = () =>{
    if(isValidForm){
      console.log("submit")
    }else{
      console.log("invalid")
    }
  }
  const handleCancel = () =>{
    console.log("cancel")
    closeModal();
  }

  const loadPhoto = () =>{
    console.log("loadPhoto")
  }

  return(
    <div className="NewProduct">  
      <div className='noti'>
        <label>New Product {`${valid}`}</label>
        <p>{error}</p>
      </div>

      <div className='middle'>
        <div>
          <Imagen/>
          <Button name='AddPhoto' HandleClick={loadPhoto}/>
        </div>
        <div id='text'>
          <TextField  fieldName={"Name"} getValue ={validateName}  validate={() => {return  true} } error={handleError}/>
          <TextArea fieldName={"Description"} getValue={validateDescription}/>
        </div>

      </div>
      
      <div className='footer'>
        <Button name='Create' HandleClick={handleAccept}/>
        <Button name='Cancel' HandleClick={handleCancel}/>
      </div>

    </div>
  )
}
export default NewProduct;