import * as S from './styled'
import LoginTexField from "components/organism/login/textField";
import ButtonField from "../../organism/login/buttonField";
import SignInUpBanner from 'components/organism/SignInUpBanner/banner';

export default function LoginPage (){
    return(
        <S.SectionWrap>
            <SignInUpBanner/>
            <S.ContectWrap>
                <LoginTexField/>
                <ButtonField/>
            </S.ContectWrap>
        </S.SectionWrap>
    )
}