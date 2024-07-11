import TextArea from "components/atom/textArea/textArea";
import TextField from "components/atom/textField/textField";
import * as S from './styled'
import Button from "components/atom/button/button";


export default function InputsLayerPopoupContents (
    
){
    return (
        <section>
            <h1>프로그램 신청</h1>
            <S.ApplicantInfoWrap>
                <TextField inputTitle='신청자' style={{width:'240px'}}/>
                <TextField inputTitle='휴대폰 번호' style={{width:'240px'}}/>
            </S.ApplicantInfoWrap>
            <TextField inputTitle='피드백 결과 수신용 이메일 주소'/>
            <TextArea textAreaTilte='피드백 요청사항'/>
            <S.BtnWrap>
                <Button text='취소하기'/>
                <Button text='신청하기'/>
            </S.BtnWrap>
        </section>
    )
}