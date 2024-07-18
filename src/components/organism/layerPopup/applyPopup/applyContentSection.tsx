import { useCustomChangeHandler } from "commons/hooks/useChangeHandler";
import { memo } from "react";
import * as S from './styled'
import { creatProgramApplication } from "commons/appServe/baseApi";
import TextField from "components/atom/textField/textField";
import { fieldParam } from "./utils";
import TextArea from "components/atom/textArea/textArea";


 function ApplyContentsSection (props:{isConfirm:boolean}){
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
            collectionName:'apply-program',
            req:inputs
        }
        creatProgramApplication(apiParam)
    }
    
    return (
        <section>
            <S.ApplicantInfoWrap>
                <TextField {...fieldParam['applicant']} onChangeHandler={onChangeHandler}/>
                <TextField {...fieldParam['phone']} onChangeHandler={onChangeHandler}/>
            </S.ApplicantInfoWrap>
                <TextField {...fieldParam['email']} onChangeHandler={onChangeHandler}/>
                <input type='file'/>
                <TextArea {...fieldParam['feedbackReq']} onChangeHandler={onChangeHandler}/>
        </section>
    )
}
export default memo(ApplyContentsSection)