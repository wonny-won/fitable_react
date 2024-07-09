import { useState } from "react"
/********************************************************************
 * UI 관련 utils
 ********************************************************************/
export interface RecommandSectionType {
    title : string;
    data : string;
}

export const RecommandSection:RecommandSectionType[] = [
    {
        title:'이런분께 추천해요!',
        data: 'recommandfor'
    },
    {
        title:'이런분은 추천하지 않아요.',
        data: 'notRecomandfor'
    },
    {
        title:'이것만은 확실히 가져갈 수 있어요!',
        data: 'benefit'
    },
]


/********************************************************************
 * local hooks
 ********************************************************************/
/**
 * mento 보관함 저장 핸들러 함수
 * 
 * @returns isSaveMento,onClickSaveMento
 * isSaveMento(state: bool) : 해당멘토 찜 여부
 * onClickSaveMento(fn) : 멘토 찜 핸들러 함수
 */
export const useSaveMentoBtn = ()=>{
    const [isSaveMento,setSaveMento] = useState(false);
    const onClickSaveMento = ()=>{
        setSaveMento(!isSaveMento)
    }
    return {
        isSaveMento,
        onClickSaveMento
    }
}