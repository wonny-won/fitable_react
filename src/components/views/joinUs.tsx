import JoinUsTextFiled from "components/organism/JoinUs/textField";
import JoinUsButtonField from "components/organism/SignInUpBanner/buttonField";
import JoinUsPage from "components/templates/joinUs/joinusPage";

export default function JoinUs (){
    return(
        <>
            <JoinUsPage >
                <JoinUsTextFiled/>
                <JoinUsButtonField/>
            </JoinUsPage>
        </>
    )
}