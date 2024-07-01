import ScrollDown from 'components/atom/icons/scrollDown'
import * as CS from '../../../commonStyle'
import styled from '@emotion/styled'

export default function HomeIntroSection(){
    return ( 
        <BgSectionWrap>
            <TextWrap>
                <CS.H1 style={{color:'#0c54ad'}}>당신을 위한</CS.H1>
                <CS.H1 style={{color:'#0c54ad'}}>가장 fit한 이직준비</CS.H1>
                <CS.StrongH1 style={{color:'#0c54ad'}}>Fitable</CS.StrongH1>
            </TextWrap>
            <ScrollDown />
        </BgSectionWrap>
    )
}

//---------------------------------------------------------------------
// local style
//---------------------------------------------------------------------
const BgSectionWrap = styled.section`
    height: calc(100vh - 64px);
    background-image: url('/assets/homeIntro.jpg');
    background-size: cover;
    background-position:32%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
 const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute ;
    top: 50px;
    right: 20%;
`