import * as CS from '../../commonStyle'

export default function HomeReviewSection (){
    const styleParam = {
        padding: '30px',
        justify: 'space-between'
    }

    return (
        <CS.SectionWrapper style={styleParam}>
                <img width={'300'} height={'400'} src='/assets/idCard.svg'/>
                <div>
                    <CS.StrongH3>피터블로</CS.StrongH3>
                    <CS.H3>나에게 <CS.StrongH3>fit</CS.StrongH3>한 피드백,</CS.H3>
                    <CS.H3>후기가 증명합니다.</CS.H3>
                </div>
        </CS.SectionWrapper>
    )
}