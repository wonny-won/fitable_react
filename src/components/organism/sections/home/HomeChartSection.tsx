import styled from '@emotion/styled'
import BarWidget from '../../infoWidget/barwidget'
import PieWidget from '../../infoWidget/PieWidget'
import * as CS from '../../../commonStyle'

export default function HomeCahrtSection(){
    const styleParam = {
        flexDirec:'column',
        padding: '',
        justify: 'space-between'
    }

    return(
        <CS.SectionWrapper style={styleParam}>
            <CS.H3>지금 이순간에도,</CS.H3>
            <CS.H3><CS.StrongH3>당신의 경쟁자들은 노력</CS.StrongH3>합니다.</CS.H3>
            <ChartAreat>
                <BarWidget />
                <PieWidget />
            </ChartAreat>
        </CS.SectionWrapper>
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
