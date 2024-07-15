import Button from "components/atom/button/button";
import * as S from './styled'

export default function ButtonField (){
    return(
        <>
            <Button text='로그인' style={{width:'250px'}}/>
            <S.JoinUsField>
                아직 회원이 아니신가요?
                <a href="/joinus">
                    <S.JoinUsSpan> 합류하기</S.JoinUsSpan>
                </a>
            </S.JoinUsField>
        </>
    )
}