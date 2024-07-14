import { useCustomChangeHandler } from "commons/hooks/useChangeHandler";
import { memo } from "react";
import ApplicantTextField from '../../../molecule/layerPopup/applyPopupMolecule/applicant'
import PhoneTextField from '../../../molecule/layerPopup/applyPopupMolecule/phone'
import EmailTextField from '../../../molecule/layerPopup/applyPopupMolecule/email'
import TextAreaField from '../../../molecule/layerPopup/applyPopupMolecule/feedBackReq'
import * as S from './styled'
import { creatProgramApplication } from "commons/appServe/baseApi";


 function InputContents (props:{isConfirm:boolean}){
    const { isConfirm } = props
    const initInnputsParam = {
        porgram:'feedback',
        applicant:'',
        phone:'',
        email:'',
        feedbackReq:''
    }
    const { inputs,onChangeHandler } = useCustomChangeHandler(initInnputsParam)
    if(isConfirm){
        const apiParam = {
            collectionName:'apply_program',
            req:inputs
        }
        creatProgramApplication(apiParam)
    }
    
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