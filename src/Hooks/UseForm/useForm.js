import { useState } from "react"

export function useForm(initialState = []){

  const reset = () => {
      setForm( initialState );
  }

  const [form, setForm] = useState(initialState);
  
  const isValidForm = (count = 1)=>{
   let valid = true;
   if(form.length < count)
    valid = false;

    form.map((field)=>{
      if(field.error.length > 0){
        valid = false;
      }
      console.log("e: ", field.error)
    })
    
    return valid;
  }

  function inputChange(target){

    // const array = form.filter((field) => field.name !== target.name);

    // setForm([
    //   ...array,
    //   {
    //     name: target.name,
    //     value: target.value,
    //     error: target.error
    //   }])

    //   console.log("inputChange: ", target)
    //   console.log("inputChange: ", form)

      const newArray = form.map((field)=>{
        if(field.name == target.name){
          return{
            name: target.name,
            value: target.value,
            error: target.error
          }

        }else return field;

      })

      setForm(newArray)
  }

  const getField = (field) =>{

    // console.log("getField triggered: ", field)
    const fielde = form.find((value) => value.name == field);
   
    return  fielde ? fielde : {}
  }

  return [form, getField, inputChange, isValidForm, reset]
}
