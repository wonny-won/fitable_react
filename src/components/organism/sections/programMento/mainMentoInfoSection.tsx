import Tag from 'components/atom/tag/tag';
import * as S from '../../../commonStyle'
import * as PS from './styled'
import ReviewCard from 'components/molecule/Review/reviewCard';

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
            id:number;
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
                        data?.feedbackFieldTags.map((item)=>(<Tag data={item}/>))
                    }
                </PS.TagWrap>

                <PS.Line/>

                {/* 추천 / 비추천 대상 및 혜택 part mini section */}
                <PS.MiniSectionTitle>이런분께 추천해요!</PS.MiniSectionTitle>
                <PS.NormalTxt {...{padding:'15px 0px 10px 10px'}}> ✐ {data?.recommandfor} </PS.NormalTxt>
                
                <PS.MiniSectionTitle>이런분은 추천하지 않아요.</PS.MiniSectionTitle>
                <PS.NormalTxt {...{padding:'15px 0px 10px 10px'}}> ✐ {data?.notRecomandfor} </PS.NormalTxt>
                
                <PS.MiniSectionTitle>이것만큼은 확실히 가져갈 수 있어요!</PS.MiniSectionTitle>
                <PS.TxtWrap>
                    <PS.NormalTxt> {data?.benefit} </PS.NormalTxt>
                </PS.TxtWrap>

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