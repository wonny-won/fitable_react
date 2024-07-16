import Button from "components/atom/button/button";
import * as S from './styled'

export default function JoinUsButtonField (){
    const commonBtnStyle = {width: '125px'}
    return(
        <S.BtnWrap>
            <Button text="가입하기" style={{...commonBtnStyle,backgroundColor:'#147fa3'}}/>
            <Button text="뒤로가기" style={commonBtnStyle} />
        </S.BtnWrap>
    )
}