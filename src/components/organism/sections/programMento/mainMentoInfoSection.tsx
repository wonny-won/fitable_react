import Tag from 'components/atom/tag/tag';
import * as S from '../../../commonStyle'
import * as PS from './styled'
import ReviewCard from 'components/molecule/Review/reviewCard';
import { RecommandSection } from './utils';

interface DataProp {
    data?:{
        name: string;
        appealDescription:string;
        mentoAppeal:string;
        feedbackFieldDesc:string;
        feedbackFieldTags:string[];
        recommandfor:string;
        notRecomandfor:string;
        benefit:string;
        review:{
            id: number;
            name:string;
            star:number,
            desc:string;
            program: string;
        }[];
    }
}

export default function MainMentoInfoSection(props:DataProp){
    const {data} = props

    return(
        <S.SectionWrapper style={{flexDirec:'column',overflow:'auto'}}>
            <PS.ContentsWrap >
                {/* 멘토 소개 part mini section*/}
                <PS.MainText {...{padding:'20px 0px'}}>{data?.appealDescription}</PS.MainText>
                <PS.NormalTxt>{data?.mentoAppeal}</PS.NormalTxt>

                {/* 멘토 강점 */}
                <PS.MiniSectionTitle>자신있게 설명 할 수 있는 분야는,</PS.MiniSectionTitle>
                <PS.NormalTxt {...{padding:'20px 0px 10px 0px'}}>{data?.feedbackFieldDesc} 입니다.</PS.NormalTxt>
                <PS.TagWrap>
                    {
                        data?.feedbackFieldTags.map((item,idx)=>(<Tag key={idx} data={item}/>))
                    }
                </PS.TagWrap>

                <PS.TxtWrap {...{margin:'30px 0'}}>
                    <PS.Text1 {...{color:'#fff',padding:'10px'}}> 이런걸 물어보시면 좋아요! </PS.Text1>
                    <PS.NormalTxt {...{padding:'10px'}}> • 현재 실력을 파악하고 싶어요! </PS.NormalTxt>
                    <PS.NormalTxt {...{padding:'10px'}}> • 무엇을 공부해야 좀 더 좋은 개발자가 될 수 있나요? </PS.NormalTxt>
                    <PS.NormalTxt {...{padding:'10px'}}> • 포트폴리오의 강점과 고쳐져야 할 단점은 무었인가요? </PS.NormalTxt>
                </PS.TxtWrap>    


                <PS.Line/>

                {/* 추천 / 비추천 대상 및 혜택 part mini section */}
                {
                    RecommandSection.map((item:any,idx:any)=>{
                        const dataType:'recommandfor' | 'notRecomandfor' |  'benefit' =  item.data
                        return (
                        <div key={idx}>
                            <PS.MiniSectionTitle>{item.title}</PS.MiniSectionTitle>
                            <PS.TxtWrap>
                                <PS.NormalTxt {...{padding:'15px 0px 10px 10px'}}> ✐ {data?.[dataType]} </PS.NormalTxt>
                            </PS.TxtWrap>    
                        </div>
                    )})
                }

                <PS.Line/>

                {/* top3 리뷰 part mini section */}
                <PS.MiniSectionTitle>{data?.name} 멘토의 피드백 후기</PS.MiniSectionTitle>
                {
                    data?.review.map((item)=>(
                        <ReviewCard key={item.id} data={item}/>
                    ))
                }
            </PS.ContentsWrap>
        </S.SectionWrapper>
    )
}