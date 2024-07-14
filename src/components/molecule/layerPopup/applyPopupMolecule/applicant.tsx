import TextField from "components/atom/textField/textField";
import { ChangeEvent, memo } from "react"
import { fieldParam } from "./utils";

interface PropType {
    onChangeHandler?: (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
}

const ApplicantTextField = (props:PropType)=>{
    const {onChangeHandler} = props
    return (
        <TextField {...fieldParam['applicant']} onChangeHandler={onChangeHandler}/>
    )
}

export default memo(ApplicantTextField)