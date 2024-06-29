import BarWidget from '../infoWidget/PieWidget'
import PieWidget from '../infoWidget/barwidget'
import * as S from './styled'

export default function HomeCahrtSection(){
    const styleParam = {
        flexDirec:'column',
        padding: ''
    }

    return(
        <S.SectionWrapper style={styleParam}>
            <S.H3>지금 이순간에도,</S.H3>
            <S.H3><S.StrongH3>당신의 경쟁자들은 노력</S.StrongH3>합니다.</S.H3>
            <S.ChartAreat>
                <PieWidget />
                <BarWidget />
            </S.ChartAreat>
        </S.SectionWrapper>
    )
}