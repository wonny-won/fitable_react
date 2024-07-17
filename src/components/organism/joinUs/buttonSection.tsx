import Button from "components/atom/button/button";
import * as S from '../SignInUpBanner/styled'

export default function JoinUsButtonField (){
    const commonBtnStyle = {width: '125px'}
    
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <Button text="가입하기" style={{...commonBtnStyle,backgroundColor:'#147fa3'}}/>
            <Button text="뒤로가기" style={commonBtnStyle} />
        </div>
    )
}