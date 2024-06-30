import * as S from '../commonStyled'
import * as AL from './styled'

export default function PortfolioSection(){
    const SectionStyle = {height: '100vh'}
    const H1Style = {
        fontSize:'18px',
        padding: '0 20px',
    }
    const titleArr = ['Portfolio Feedback ' ,'Resume Feedback']

    return(
        <S.SectionWrapper style={SectionStyle}>
            <AL.ProgramTitleWrap>
                {
                    titleArr.map((item,idx)=>(
                        <AL.TitleWrap key={idx}>
                            {idx===titleArr.length-1 && '|'}
                            <div>
                                <S.H1 style={H1Style}>{item}</S.H1>
                                <AL.HoverLine/>
                            </div>
                        </AL.TitleWrap>
                    ))
                }
            </AL.ProgramTitleWrap>
        </S.SectionWrapper>
    )
}