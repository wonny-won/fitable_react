import TextField from "components/atom/textField/textField"
import { memo,ChangeEvent } from "react"
import { fieldParam } from "./utils"

interface PropType {
    onChangeHandler?: (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
}

const PhoneTextField = (props:PropType)=>{
    const {onChangeHandler} = props
    return (
        <TextField {...fieldParam['phone']} onChangeHandler={onChangeHandler}/>
    )
}

export default memo(PhoneTextField)