import WidgetFrame from "components/molecule/widget/widgetFrame";
import * as S from './home/styled'
import PieWidget from "components/organism/infoWidget/PieWidget";
import BarWidget from "components/organism/infoWidget/barwidget";
import HomeCahrtSection from "components/organism/sections/HomeChartSection";
import HomeReviewSection from "components/organism/sections/HomeReviewSetction";

export default function Home (){
    return(
        <>
            {/* <S.HomeTitleArea>   
                <S.Subtitle>
                    <S.Strong>이직</S.Strong>의 모든 것
                </S.Subtitle>
                <S.Title>
                    <S.Strong>피터블</S.Strong> 에서 쉽고 간편하게
                </S.Title>
            </S.HomeTitleArea> */}
            <HomeCahrtSection/>
            <HomeReviewSection/>
        </>
    )
}