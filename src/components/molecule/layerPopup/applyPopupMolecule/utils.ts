/*********************************************************************
 * local variables
 *********************************************************************/
//-- textfield / textArea props define
export const fieldParam:any = {
    applicant:{
        id: 'applicant',
        inputTitle: '신청자',
        style:{width:'240px'},
        isRequired:true,
    },
    phone:{
        id: 'phone',
        inputTitle: '휴대폰',
        style:{width:'240px'},
        isRequired:true,
    },
    email:{
        id: 'email',
        inputTitle: '결과 수신용 이메일',
        style:{},
        isRequired:true,

    },
    feedbackReq:{
        id: 'feedbackReq',
        textAreaTilte: '피드백 요청사항',
        style:{},
        isRequired:false,
    }
}