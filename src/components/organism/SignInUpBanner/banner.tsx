import * as S from './styled'

interface PropType {
    mainTxt?: string;
    subTxt?: string;
}

export default function SignInUpBanner(props:PropType){
    const { mainTxt,subTxt } = props

    return(
        <>
        <S.BannerWrap>
            <S.containter>
                <S.ValueOfTogather> { subTxt ? subTxt: '같이의 가치' } </S.ValueOfTogather>
                <S.MainTitle> { mainTxt ? mainTxt : 'FITABLE' } </S.MainTitle>
            </S.containter>
        </S.BannerWrap>
        </>
    )
}