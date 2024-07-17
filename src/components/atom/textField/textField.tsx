import * as S from './styled'
import * as CS from '../../commonStyle'
import { ChangeEvent, memo } from 'react';
import InputFeild from './inputFiled'
import InputTitle from './inputTitle';

interface TextFieldProp {
    id:string;
    inputTitle?: string;
    style?:{};
    isRequired?:boolean;
    onChangeHandler?:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
};
function TextField (props:TextFieldProp){
    const {id,inputTitle,style,isRequired,onChangeHandler} = props

    return(
        <>
            <S.TextFieldWrapper style={style}>
                <InputTitle inputTitle={inputTitle} isRequired={isRequired}/>
                <InputFeild id={id} onChangeHandler={onChangeHandler}/>
            </S.TextFieldWrapper>
        </>
    )

}

export default memo(TextField)