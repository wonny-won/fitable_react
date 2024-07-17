import { usePopupHandler } from "commons/hooks/usePopupHandler";
import LayerPopup from "components/atom/layerPopup/layerPopup";
import ApplyBtnSection from "components/organism/layerPopup/applyPopup/applyBtnSection";
import ApplyContentsSection from "components/organism/layerPopup/applyPopup/applyContentSection";
import { memo } from "react";

function ApplyLayerPopup(){
    const {isConfirm,onClickOpenPopupHandler,onClickConfrimBtn} = usePopupHandler()
    const btnParam = {
        onClickOpenPopupHandler,
        onClickConfrimBtn
    }

    return (
        <LayerPopup>
            <h1>피드백 프로그램 신청</h1>
            <ApplyContentsSection isConfirm={isConfirm}/>
            <ApplyBtnSection {...btnParam}/>
        </LayerPopup>
    )
}
export default memo(ApplyLayerPopup)