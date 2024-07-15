import * as S from './styled'
import LoginTexField from "components/organism/login/textField";
import ButtonField from "../../organism/login/buttonField";

export default function LoginPage (){
    return(
        <S.SectionWrap>
            <LoginTexField/>
            <ButtonField/>
        </S.SectionWrap>
    )
}