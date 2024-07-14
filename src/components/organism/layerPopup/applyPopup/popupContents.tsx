import Button from "components/atom/button/button";
import { usePopupHandler } from "commons/hooks/usePopupHandler";
import { memo } from "react";
import * as S from './styled'
import InputsContents from "./inputsContents";

 function PopupContents (){
    const {isConfirm,onClickOpenPopupHandler,onClickConfrimBtn} = usePopupHandler()
    
    return (
        <section>
            <InputsContents isConfirm={isConfirm}/>
            <S.BtnWrap>
                <Button text='취소하기' onClickHandler={onClickConfrimBtn} />
                <Button text='신청하기' onClickHandler={onClickOpenPopupHandler}/>
            </S.BtnWrap>
        </section>
    )
}
export default memo(PopupContents)