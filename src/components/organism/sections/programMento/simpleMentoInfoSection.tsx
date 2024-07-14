import Button from 'components/atom/button/button';
import * as S from './styled'
import Save from 'components/atom/icons/save';
import { useSaveMentoBtn } from './utils';
import ApplyLayerPopup from 'components/templates/layerPopup/applyLayerPopup';
import { usePopupHandler } from 'commons/hooks/usePopupHandler';

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
    const {isOpen,onClickOpenPopupHandler} = usePopupHandler()

    //-- button comp props
    const applyBtnParam = {
        text: '피드백 신청하기',
        onClickHandler: onClickOpenPopupHandler
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
                    <Button {...applyBtnParam}/>
                </S.BtnWrap>
                <ApplyLayerPopup />            
            </S.SectionWrap>
    )
}