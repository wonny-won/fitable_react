import { useCustomChangeHandler } from "commons/hooks/useChangeHandler";
import { memo } from "react";
import ApplicantTextField from '../../../molecule/layerPopup/applyPopupMolecule/applicant'
import PhoneTextField from '../../../molecule/layerPopup/applyPopupMolecule/phone'
import EmailTextField from '../../../molecule/layerPopup/applyPopupMolecule/email'
import TextAreaField from '../../../molecule/layerPopup/applyPopupMolecule/feedBackReq'
import * as S from './styled'

 function InputContents (props:{isConfirm:boolean}){
    const initInnputsParam = {
        applicant:'',
        phone:'',
        email:'',
        feedbackReq:''
    }
    const {isConfirm} = props
    const {inputs,onChangeHandler} = useCustomChangeHandler(initInnputsParam)
    
    return (
        <section>
            <S.ApplicantInfoWrap>
                <ApplicantTextField onChangeHandler={onChangeHandler}/>
                <PhoneTextField onChangeHandler={onChangeHandler}/>
            </S.ApplicantInfoWrap>
                <EmailTextField onChangeHandler={onChangeHandler}/>
                <input type='file'/>
                <TextAreaField onChangeHandler={onChangeHandler}/>
        </section>
    )
}
export default memo(InputContents)