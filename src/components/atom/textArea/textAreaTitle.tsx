import { memo } from 'react';
import * as S from './style'
interface PropType {
    textAreaTitle: string;
}

function TextAreaTitleField (props:PropType){
    const {textAreaTitle} = props

    return(
        <>
            <S.TextAreaTilte> {textAreaTitle} </S.TextAreaTilte>
        </>
    )
}
export default memo(TextAreaTitleField)