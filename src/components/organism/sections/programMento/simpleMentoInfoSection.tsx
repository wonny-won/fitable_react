import Button from 'components/atom/button/button';
import * as S from './styled'
import Save from 'components/atom/icons/save';
import { useSaveMentoBtn } from './utils';

interface PropType {
    data?:{
        id:number;
        name:string;
        company:string;
        position:string;
        employmentYear:string;
        feedbackCount:number;
    }
}

export default function SimpleMentoInfoSection (props:PropType) {
    const {data} = props
    const { isSaveMento, onClickSaveMento } = useSaveMentoBtn()

    //-- button comp props
    const buttonParam = {
        text: '피드백 신청하기',
    }
    const mentoSaveBtnParam = {
        isuseIcon: true,
        iconComp: <Save/>,
        styles: {backgroundColor:'transpraent', border: '1.5px solid #fff', color: '#FFF'},
        onClickHandler: onClickSaveMento
    }

    return (
            <S.SectionWrap>
                <div>
                    <S.MentoBasicInfo>
                        <S.Img></S.Img>
                        <div>
                            <S.MainText>{data?.name}</S.MainText>
                            <S.Text1>{data?.company}</S.Text1>
                            <S.Text3>{data?.position} | {data?.employmentYear}</S.Text3>
                        </div>
                    </S.MentoBasicInfo>
                    <S.Text2>프로그램 피드백 {data?.feedbackCount} 회 | 피터블 소속 멘토</S.Text2>
                </div>
                <S.BtnWrap>
                    <Button {...mentoSaveBtnParam}/>
                    <Button {...buttonParam}/>
                </S.BtnWrap>
            </S.SectionWrap>
    )
}