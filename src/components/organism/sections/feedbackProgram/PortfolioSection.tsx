import Card from 'components/molecule/card/Card'
import * as CS from '../../../commonStyle'
import * as AL from './styled'
import { mentoLst } from 'commons/utils/mockData'
import { H1Style, SectionStyle, logoImgArr, useProgramChangeHandler, titleArr } from './utils'
// import { useRouting } from 'commons/utils/routing'

export default function PortfolioSection(){
    const {program,onChangeProgram} = useProgramChangeHandler()

    return(
        <CS.SectionWrapper style={SectionStyle}>
            <AL.ApplyBanner>
                <CS.StrongH3> 원하는 회사 멘토, 다 여기에.</CS.StrongH3>
                <AL.LogoWrap>
                    {logoImgArr.map((item,idx)=>(
                        <AL.LogoImg key={idx} width={'120px'} height={'60px'} src={item}/>
                    ))}
                </AL.LogoWrap>
            </AL.ApplyBanner>
            <AL.ProgramTitleWrap>
                {
                    titleArr.map((item,idx)=>(
                        <AL.TitleWrap key={idx}>
                            {idx===titleArr.length-1 && '|'}
                            <div onClick={()=>{onChangeProgram(item)}}>
                                <CS.H1 style={H1Style}>{item}</CS.H1>
                                <AL.HoverLine/>
                            </div>
                        </AL.TitleWrap>
                    ))
                }
            </AL.ProgramTitleWrap>
            <AL.CardSection>
                {
                    mentoLst[program].map((item,idx)=>(
                        <Card key={idx} data={item}/>
                    ))
                }
            </AL.CardSection>
        </CS.SectionWrapper>
    )
}