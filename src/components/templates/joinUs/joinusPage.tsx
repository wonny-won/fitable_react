import JoinUsButtonField from "components/organism/joinUs/buttonField";
import JoinUsTextFiled from "components/organism/joinUs/textField";
import * as S from './styled'
import JoinUsPageBanner from "components/organism/joinUs/banner";

export default function JoinUsPage (){
    return(
        <S.JoinUsSection>
            <JoinUsPageBanner/>
            <div>
                <JoinUsTextFiled/>
                <JoinUsButtonField/>
            </div>
        </S.JoinUsSection>
    )
}