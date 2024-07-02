import { NavigateFunction, useNavigate } from 'react-router-dom';
import * as S from './styled'
import Tag from 'components/atom/tag/tag';

interface DataProp {
    data:{
        id: number;
        name: string;
        language:string;
        company:string;
        position:string;
        employmentYear:string;
        feedbackCount:number;
        appealDescription:string;
        tag:string[];
    },
    onClickHandler?:NavigateFunction;
}

export default function Card(props:DataProp){
    const {data} = props
    const navigate = useNavigate()
    
    return(
        <>
            <S.CardWrap onClick={()=>{navigate(`/program/:${data.id}`)}}>
                <S.MainInfo>
                    <S.Image></S.Image>
                    <S.MentoInfo>
                        <S.Name>{data.name} &nbsp; | &nbsp; {data.language}</S.Name>
                        <S.Company>{data.company}</S.Company>
                        <S.Company> {data.position} | {data.employmentYear}</S.Company>
                    </S.MentoInfo>
                </S.MainInfo>
                <S.Description>
                    <div>
                        <S.FeedbackeCount> 포트폴리오 피드백 {data.feedbackCount}회</S.FeedbackeCount>
                        <S.AppealDesc> {data.appealDescription} </S.AppealDesc>
                    </div>
                    <S.TagWrap>
                        {
                            data.tag.map((item,idx)=>(
                                <Tag key={idx} data={item}/>
                            ))
                        }
                    </S.TagWrap>
                </S.Description>
            </S.CardWrap>
        </>
    )
}