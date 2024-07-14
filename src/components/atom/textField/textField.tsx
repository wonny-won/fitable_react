import * as S from './styled'
import * as CS from '../../commonStyle'
import { ChangeEvent, memo } from 'react';

interface TextFieldProp {
    id:string;
    inputTitle: string;
    style?:{};
    isRequired?:boolean;
    onChangeHandler?:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void
}

 const TextField = (props:TextFieldProp)=>{
    const {id,inputTitle,style,isRequired,onChangeHandler} = props

    return(
        <>
            <S.TextFieldWrapper style={style}>
                <S.InputTitle>{inputTitle}{isRequired && <CS.Required>*</CS.Required>}</S.InputTitle>
                <S.Input id={id} onChange={onChangeHandler}/>
            </S.TextFieldWrapper>
        </>
    )
}

export default memo(TextField)