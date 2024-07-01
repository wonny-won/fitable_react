import styled from '@emotion/styled'
import BarWidget from '../../infoWidget/barwidget'
import PieWidget from '../../infoWidget/PieWidget'
import * as S from '../commonStyled'

export default function HomeCahrtSection(){
    const styleParam = {
        flexDirec:'column',
        padding: '',
        justify: 'space-between'
    }

    return(
        <S.SectionWrapper style={styleParam}>
            <S.H3>지금 이순간에도,</S.H3>
            <S.H3><S.StrongH3>당신의 경쟁자들은 노력</S.StrongH3>합니다.</S.H3>
            <ChartAreat>
                <BarWidget />
                <PieWidget />
            </ChartAreat>
        </S.SectionWrapper>
    )
}

//--------------------------------------------------------------------------
// local style
//--------------------------------------------------------------------------
const ChartAreat = styled.div`
    display: flex;
    justify-content: space-between;
    color: #1a1814;
`
