import TextArea from "components/atom/textArea/textArea";
import TextField from "components/atom/textField/textField";
import * as S from './styled'
import Button from "components/atom/button/button";
import { usePopupHandler } from "commons/hooks/usePopupHandler";
import { useCustomChangeHandler } from "commons/hooks/useChangeHandler";
import { fieldParam } from "./utils";

export default function InputsLayerPopoupContents (){
    const {onClickOpenPopupHandler} = usePopupHandler()
    const {inputs,onChangeHandler} = useCustomChangeHandler()
    console.log(inputs)

    return (
        <section>
            <h1>프로그램 신청</h1>
            <S.ApplicantInfoWrap>
                <TextField {...fieldParam['applicant']} onChangeHandler={onChangeHandler}/>
                <TextField {...fieldParam['phone']} onChangeHandler={onChangeHandler}/>
            </S.ApplicantInfoWrap>
            <TextField {...fieldParam['email']} onChangeHandler={onChangeHandler}/>
            <TextArea {...fieldParam['feedbackReq']} onChangeHandler={onChangeHandler}/>
            <S.BtnWrap>
                <Button text='취소하기' onClickHandler={onClickOpenPopupHandler} />
                <Button text='신청하기' onClickHandler={onClickOpenPopupHandler}/>
            </S.BtnWrap>
        </section>
    )
}