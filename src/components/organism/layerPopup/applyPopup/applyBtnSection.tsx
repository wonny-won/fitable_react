import * as S from './styled'
import Button from '../../../atom/button/button'
import { memo } from 'react'

interface PropTyp{
    onClickOpenPopupHandler: ()=>void;
    onClickConfrimBtn: ()=>void;
}

function ApplyPopupBtnSection (props:PropTyp){
    const {onClickOpenPopupHandler,onClickConfrimBtn} = props
    return (
            <S.BtnWrap>
                <Button text='취소하기' onClickHandler={onClickOpenPopupHandler} />
                <Button text='신청하기' onClickHandler={onClickConfrimBtn}/>
            </S.BtnWrap>
    )
}

export default memo(ApplyPopupBtnSection)