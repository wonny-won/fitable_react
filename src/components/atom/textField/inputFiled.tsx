import { ChangeEvent, memo } from "react"
import * as S from './styled'

interface InputFieldProp {
    id:string;
    onChangeHandler?:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
}

function InputFeild (props:InputFieldProp){
    const {id,onChangeHandler} = props
    const inputParam = {
        id,
        onChange:onChangeHandler
    }

    return( <S.Input {...inputParam}/> )
}
export default memo(InputFeild)
