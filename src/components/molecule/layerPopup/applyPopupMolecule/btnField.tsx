import TextField from "components/atom/textField/textField";
import { memo,ChangeEvent } from "react"
import { fieldParam } from "./utils";

interface PropType {
    onChangeHandler?: (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
}

const EmailTextField = (props:PropType)=>{
    const {onChangeHandler} = props
    return (
        <TextField {...fieldParam['email']} onChangeHandler={onChangeHandler}/>
    )
}

export default memo(EmailTextField)