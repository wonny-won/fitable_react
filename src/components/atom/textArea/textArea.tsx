import { ChangeEvent, memo } from 'react';
import * as S from './style'

type Inputs = {[id:string]:string}
interface PropType {
    id: string;
    textAreaTilte: string;
    onChangeHandler?:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
}

const TextArea = (props:PropType)=>{
    const {id,textAreaTilte,onChangeHandler} = props
    return(
        <S.TextAreaWrap>
            <S.TextAreaTilte> {textAreaTilte} </S.TextAreaTilte>
            <S.TextArea id={id} onChange={onChangeHandler}/>
        </S.TextAreaWrap>
    )
}
export default memo(TextArea)