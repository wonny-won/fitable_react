import { ChangeEvent, memo } from 'react';
import * as S from './style'

interface TextAreaFieldProp {
    id:string;
    onChangeHandler?:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
}

function TextAreaField (props:TextAreaFieldProp){
    const {id,onChangeHandler} = props
    const textAreaParam = {
        id,
        onChange:onChangeHandler
    }

    return( <S.TextArea {...textAreaParam}/> )
}
export default memo(TextAreaField)