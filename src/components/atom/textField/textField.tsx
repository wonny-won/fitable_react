import * as S from './styled'

interface TextFieldProp {
    inputTitle: string;
    style?:{}
}

export default function TextField (props:TextFieldProp){
    const {inputTitle,style} = props
    return(
        <>
            <S.TextFieldWrapper style={style}>
                <S.InputTitle>{inputTitle}</S.InputTitle>
                <S.Input/>
            </S.TextFieldWrapper>
        </>
    )
}