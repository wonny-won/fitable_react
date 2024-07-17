import { ChangeEvent, memo } from 'react';
import TextAreaTitleField from './textAreaTitle'
import TextAreaField from './textAreaFiled'
import * as S from './style'
interface PropType {
    id: string;
    textAreaTitle: string;
    onChangeHandler?:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
}

const TextArea = (props:PropType)=>{
    const {id,textAreaTitle,onChangeHandler} = props
    const textareaParam = {
        id,
        onChangeHandler
    }

    return(
        <S.TextAreaWrap>
            <TextAreaTitleField textAreaTitle={textAreaTitle}/>
            <TextAreaField {...textareaParam}/>
        </S.TextAreaWrap>
    )
}
export default memo(TextArea)