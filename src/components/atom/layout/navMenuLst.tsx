import * as S from './styled'
import ArrowRight from "../icons/arowRight";

interface NavMenuLstProp {
    menuTitle: string;
    link:string
}

export default function NavMenuLst (props:NavMenuLstProp) {
    const {menuTitle,link} = props
    const iconParam ={
        color:'#b3b3b3',
        width: '18px'
    }
     
    return (
        <S.Wrapper>
            <S.LinkWrap href ={link}>
                <S.NavMenuWrapper>
                    <S.MenuTitle>{menuTitle}</S.MenuTitle>
                    <ArrowRight {...iconParam}/>
                </S.NavMenuWrapper>
                <S.HoverUnderLine/>
            </S.LinkWrap>
        </S.Wrapper>
    )
}