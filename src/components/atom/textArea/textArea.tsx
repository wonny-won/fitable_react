import * as S from './style'

interface PropType {
    textAreaTilte: string;
    onChangeHandler?: ()=>void;
}

export default function TextArea (props:PropType){
    const {textAreaTilte,onChangeHandler} = props
    
    return(
        <S.TextAreaWrap onChange={onChangeHandler}>
            <S.TextAreaTilte> {textAreaTilte} </S.TextAreaTilte>
            <S.TextArea/>
        </S.TextAreaWrap>
    )
}