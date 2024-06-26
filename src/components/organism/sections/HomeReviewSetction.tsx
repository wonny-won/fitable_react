import * as S from './styled'

export default function HomeReviewSection (){
    const styleParam = {
        padding: '30px'
    }

    return (
        <S.SectionWrapper style={styleParam}>
                <img width={'300'} height={'400'} src='/idCard.svg'/>
                <div>
                    <S.StrongH3>피터블로</S.StrongH3>
                    <S.H3>나에게 <S.StrongH3>fit</S.StrongH3>한 피드백,</S.H3>
                    <S.H3>후기가 증명합니다.</S.H3>
                </div>
        </S.SectionWrapper>
    )
}