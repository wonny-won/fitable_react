import TextField from "components/atom/textField/textField";
import * as S from './styled'


export default function LoginTexField() {
    const commonStyle = {width:'250px'}
    return(
        <>
            <S.TextFieldWrap>
                <TextField id='id' inputTitle="아이디" style={commonStyle}/>
                <TextField id='password' inputTitle="비밀번호" style={commonStyle}/>
            </S.TextFieldWrap>
        </>
    )
}