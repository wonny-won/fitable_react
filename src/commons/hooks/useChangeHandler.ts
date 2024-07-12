import { ChangeEvent, useState } from "react"

export const useCustomChangeHandler = ()=>{
    const [inputs,setInpus] = useState({})

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        const textFieldsId = e.target.id 
        setInpus({...inputs, [textFieldsId] :e.currentTarget.value})
    }

    return{
        inputs,
        onChangeHandler
    }
}