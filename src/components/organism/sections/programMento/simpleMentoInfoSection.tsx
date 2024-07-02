import * as S from './styled'

interface PropType {
    data?:{
        id:number;
        name:string;
        company:string;
        position:string;
        employmentYear:string;
        feedbackCount:number;
    }
}

export default function SimpleMentoInfoSection (props:PropType) {
    const {data} = props

    return (
        <>
            <S.SectionWrap>
                <S.MentoBasicInfo>
                    <S.Img></S.Img>
                    <S.InfoTextWrap>
                        <S.Name>{data?.name}</S.Name>
                        <div>{data?.company}</div>
                        <div>{data?.position} | {data?.employmentYear}</div>
                    </S.InfoTextWrap>
                </S.MentoBasicInfo>
                <div>피드백 {data?.feedbackCount} 회</div>
            </S.SectionWrap>
        </>
    )
}