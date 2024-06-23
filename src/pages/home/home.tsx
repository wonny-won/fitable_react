import WidgetFrame from "components/molecule/widget/widgetFrame";
import * as S from './styled'
import PieChart from "components/molecule/charts/pie/pieChart";
import BarChart from "components/molecule/charts/bar/barChart";

export default function Home (){
    return(
        <>
            <S.HomePRArea>   
                <S.Subtitle>
                    <S.Strong>이직</S.Strong>의 모든 것
                </S.Subtitle>
                <S.Title>
                    <S.Strong>피터블</S.Strong> 에서 쉽고 간편하게
                </S.Title>
            </S.HomePRArea>
            <S.CopatitionWidgetWrap>
                <S.HomeTextNormal>지금 이순간에도,</S.HomeTextNormal>
                <S.HomeTextNormal><S.TextH3Strong>당신의 경쟁자들은 노력</S.TextH3Strong>합니다.</S.HomeTextNormal>
                <S.WidgetArea>
                    <WidgetFrame>
                        <PieChart/>
                    </WidgetFrame>
                    <WidgetFrame>
                        <BarChart />
                    </WidgetFrame>
                </S.WidgetArea>
            </S.CopatitionWidgetWrap>
        </>
    )
}