import { TextFieldProp } from "./types";
import * as S from './styled'

export default function TextField (props:TextFieldProp){
    const {inputTitle,inputColor,width,height} = props
    return(
        <>
            <S.TextFieldWrapper style={{width: width ? width : '100%', height: height ? height : '100%'}}>
                <S.InputTitle>{inputTitle}</S.InputTitle>
                <S.Input/>
            </S.TextFieldWrapper>
        </>
    )
}