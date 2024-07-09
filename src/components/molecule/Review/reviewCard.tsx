import Tag from 'components/atom/tag/tag';
import * as S from './styled'
import Star from 'components/atom/icons/star';
import RateStar from '../rateStar/rateStar';

interface PropTyps {
    data?: {
        id: number;
        name: string;
        star: number;
        desc: string;
        program:string;
    };
    styles?:{}
    onClickHandler?:()=>void
}

export default function ReviewCard (props:PropTyps) {
    const {data,styles,onClickHandler} = props

    return(
        <>
            <S.ReviewCardWrap style={styles}>
                <S.ReviewSynthesis>
                    <S.ReviewerName>{data?.name}</S.ReviewerName>
                    <Tag data={data?.program} />
                    <S.StartWrap>
                        <RateStar rate={data?.star}/>
                    </S.StartWrap>
                </S.ReviewSynthesis>
                <S.DescWrap>{data?.desc}</S.DescWrap>
            </S.ReviewCardWrap>
        </>
    )
}