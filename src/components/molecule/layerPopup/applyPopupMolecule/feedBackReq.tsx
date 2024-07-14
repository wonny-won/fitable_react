import TextArea from "components/atom/textArea/textArea";
import { memo,ChangeEvent } from "react"
import { fieldParam } from "./utils";

interface PropType {
    onChangeHandler?: (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
}

const TextAreaField = (props:PropType)=>{
    const {onChangeHandler} = props
    return (
        <TextArea {...fieldParam['feedbackReq']} onChangeHandler={onChangeHandler}/>
    )
}

export default memo(TextAreaField)