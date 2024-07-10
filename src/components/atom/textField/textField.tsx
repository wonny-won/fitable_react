import * as S from './styled'

interface TextFieldProp {
    inputTitle: string;
    style?:{};
    onChangeHandler?:()=>void
}

export default function TextField (props:TextFieldProp){
    const {inputTitle,style,onChangeHandler} = props
    return(
        <>
            <S.TextFieldWrapper style={style} onChange={onChangeHandler}>
                <S.InputTitle>{inputTitle}</S.InputTitle>
                <S.Input/>
            </S.TextFieldWrapper>
        </>
    )
}