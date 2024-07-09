import { useState } from "react"

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