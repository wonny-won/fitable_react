import { isOpenLayerPopup } from "commons/utils/recoil/atom"
import { useRecoilState } from "recoil"

/**
 * 레이어 팝업 관련 핸들러 함수
 * @returns isOpen, onClickOpenPopupHandler()
 * 
 * [ 설 명 ]
 *  isOpen : 팝업 오픈 state
 *  onClickOpenPopupHandler() : 팝업 오픈 state 변경 핸들러 함수
 */
export const usePopupHandler = ()=>{
    const [isOpen,setIsOpen] = useRecoilState(isOpenLayerPopup)

    //-- open popup handler
    const onClickOpenPopupHandler = ()=>{
        setIsOpen(!isOpen)
    }
    return {
        isOpen,
        onClickOpenPopupHandler
    }
}