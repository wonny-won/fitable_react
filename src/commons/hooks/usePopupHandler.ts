import { isOpenLayerPopup,isOnClickConfirm } from "commons/utils/recoil/atom"
import { useCallback } from "react"
import { useRecoilState } from "recoil"

/**
 * 레이어 팝업 관련 핸들러 함수
 * @returns isOpen, onClickOpenPopupHandler()
 * 
 * [ 설 명 ]
 *  isOpen : 팝업 오픈 state
 *  onClickOpenPopupHandler() : 팝업 오픈 state 변경 핸들러 함수
 * ---------------------------------------------------------
 *  isConfirm : 신청 or 확인 등 submit 버튼 클릭시 state
 *  onClickConfrimBtn() : 신청 or 확인 등 submit state 변경 핸들러 함수
 */
export const usePopupHandler = ()=>{
    const [isOpen,setIsOpen] = useRecoilState(isOpenLayerPopup)
    const [isConfirm,setIsConfirm] = useRecoilState(isOnClickConfirm)

    //-- open popup handler
    const onClickOpenPopupHandler = ()=>{
        setIsOpen(!isOpen)
    }

    //-- onClick confirm btn
    const onClickConfrimBtn = ()=>{
        setIsConfirm(!isConfirm)
    }

    return {
        isOpen,
        isConfirm,
        onClickOpenPopupHandler,
        onClickConfrimBtn
    }
}