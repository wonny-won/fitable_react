import ScrollDown from 'components/atom/icons/scrollDown'
import * as S from './styled'

export default function HomeIntro(){
    return ( 
        <S.BgSectionWrap>
            <S.TextWrap>
                <S.H1 color={'#0c54ad'}>당신을 위한</S.H1>
                <S.H1 color={'#0c54ad'}>가장 fit한 이직준비</S.H1>
                <S.StrongH1 color={'#147af3'}>Fitable</S.StrongH1>
            </S.TextWrap>
            <ScrollDown />
        </S.BgSectionWrap>
    )
}