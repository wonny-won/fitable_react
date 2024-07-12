import { ChangeEvent } from 'react';
import * as S from './style'

interface PropType {
    id: string;
    textAreaTilte: string;
    onChangeHandler?:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void
}

export default function TextArea (props:PropType){
    const {id,textAreaTilte,onChangeHandler} = props
    
    return(
        <S.TextAreaWrap>
            <S.TextAreaTilte> {textAreaTilte} </S.TextAreaTilte>
            <S.TextArea id={id} onChange={onChangeHandler}/>
        </S.TextAreaWrap>
    )
}