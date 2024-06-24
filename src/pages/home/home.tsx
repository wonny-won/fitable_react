import WidgetFrame from "components/molecule/widget/widgetFrame";
import * as S from './styled'
import PieWidget from "components/organism/infoWidget/PieWidget";
import BarWidget from "components/organism/infoWidget/barwidget";

export default function Home (){
    return(
        <>
            <S.HomeTitleArea>   
                <S.Subtitle>
                    <S.Strong>이직</S.Strong>의 모든 것
                </S.Subtitle>
                <S.Title>
                    <S.Strong>피터블</S.Strong> 에서 쉽고 간편하게
                </S.Title>
            </S.HomeTitleArea>
            <S.MainContentsWrap>
                <S.HomeTextNormal>지금 이순간에도,</S.HomeTextNormal>
                <S.HomeTextNormal><S.TextH3Strong>당신의 경쟁자들은 노력</S.TextH3Strong>합니다.</S.HomeTextNormal>
                <S.WidgetArea>
                    <PieWidget />
                    <BarWidget />
                </S.WidgetArea>
            </S.MainContentsWrap>
            <S.ContentsWrap>
                <S.reviewWrap>
                    <img width={'300'} height={'400'} src='/idCard.svg'/>
                    <div>
                        <S.Strong>피터블로</S.Strong>
                        <div>나에게 <S.TextH3Strong>fit</S.TextH3Strong>한 피드백,</div>
                        <div>후기가 증명합니다.</div>
                    </div>
                </S.reviewWrap>
            </S.ContentsWrap>
        </>
    )
}