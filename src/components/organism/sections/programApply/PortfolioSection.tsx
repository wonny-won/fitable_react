import Card from 'components/molecule/card/Card'
import * as S from '../commonStyled'
import * as AL from './styled'
import { mentoLst } from 'commons/utils/mockData'
import { useState } from 'react'

export default function PortfolioSection(){
    const SectionStyle = {height: '100vh',flexDirec:'column',justify:''}
    const H1Style = {
        fontSize:'18px',
        padding: '0 20px',
    }
    const titleArr = ['Portfolio Feedback ' ,'Resume Feedback']
    const logoImgArr = [
        '/assets/naver.png','/assets/kakao.png','/assets/line.png','/assets/coupang.png','/assets/baemin.png','/assets/carrot_market.png','/assets/toss.png','/assets/whatap.png','/assets/kurly.png',
        '/assets/naver.png','/assets/kakao.png','/assets/line.png','/assets/coupang.png','/assets/baemin.png','/assets/carrot_market.png','/assets/toss.png','/assets/whatap.png','/assets/kurly.png',
    '/assets/naver.png','/assets/kakao.png','/assets/line.png','/assets/coupang.png','/assets/baemin.png','/assets/carrot_market.png','/assets/toss.png','/assets/whatap.png','/assets/kurly.png']
    const [program,setProgram] = useState('Portfolio')
    console.log(mentoLst[program])


    return(
        <S.SectionWrapper style={SectionStyle}>
            <AL.ApplyBanner>
                <S.StrongH3> 원하는 회사 멘토, 다 여기에.</S.StrongH3>
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
                            <div onClick={()=>{
                                console.log(item)
                                setProgram(item.split(' ')[0])
                                }}>
                                <S.H1 style={H1Style}>{item}</S.H1>
                                <AL.HoverLine/>
                            </div>
                        </AL.TitleWrap>
                    ))
                }
            </AL.ProgramTitleWrap>
            <AL.CardSection>
                {
                    mentoLst[program].map((item)=>(
                        <Card data={item}/>
                    ))
                }
            </AL.CardSection>
        </S.SectionWrapper>
    )
}