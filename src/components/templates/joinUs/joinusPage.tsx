import JoinUsTextFiled from 'components/organism/JoinUs/contentSection';
import * as S from './styled'
import SignInUpBanner from "components/organism/SignInUpBanner/banner";
import JoinUsButtonField from 'components/organism/JoinUs/buttonSection';

interface PropType {
    children?: React.ReactNode
}

export default function JoinUsPage (props:PropType){
    const txtParam = {
        mainTxt:'반가워요',
        subTxt:'함께하게 되어',
    }
    return(
        <S.JoinUsSection>
            <SignInUpBanner {...txtParam}/>
            <div>
                <JoinUsTextFiled/>
                <JoinUsButtonField/>
            </div>
        </S.JoinUsSection>
    )
}