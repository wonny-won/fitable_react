import Menu from "components/atom/icons/menu"
// import My from "components/atom/icons/my"
import * as S from './styled'
import UserProfile from "components/atom/icons/userProfile"
import FullScreen from "components/atom/icons/fullScreen"
import { iconParam, menuLst, useIsActiveState } from "./utils"
import NavMenuLst from "components/atom/layout/navMenuLst"

export default function NavBar() { 
    const {isActive,onClickChangeIsActive} = useIsActiveState()

    return(
        <>
            { isActive.fullScreen ? 
                //--- nav bar 숨김 (fullscreen o)
                (
                    <S.FloatFullScreenBtn isActive={isActive.fullScreen} onClick={()=>{onClickChangeIsActive('fullScreen')}} >
                        <FullScreen {...iconParam.fullScreen}/>
                    </S.FloatFullScreenBtn>
                )
                :
                //--- nav bar 노출 (fullscreen x)
                (
                    //-- nav bar area
                    <S.NavContentsWrapper>
                        <S.NavBarWrapper isActive={!isActive.fullScreen}>
                            <div>
                                <S.UserProfileArea>
                                    <UserProfile {...iconParam.userProfile}/> 
                                </S.UserProfileArea>       
                                <S.MeunBtn isActive={isActive.menu} onClick={()=>{onClickChangeIsActive('menu')}} >
                                    <Menu {...iconParam.menu}/>
                                </S.MeunBtn>
                            </div>
                            <S.MeunBtn onClick={()=>{onClickChangeIsActive('fullScreen')}}>
                                <FullScreen {...iconParam.fullScreen}/>
                            </S.MeunBtn>
                        </S.NavBarWrapper>

                        {/* nav list area */}
                        <S.NavMenuLstWraaper isActive={isActive.menu}>
                            <S.LstArea>
                                {
                                    menuLst.map((item)=>{
                                        return(
                                            <NavMenuLst menuTitle={item.title} link={item.link}/>
                                        )
                                    })
                                }
                            </S.LstArea>                           
                        </S.NavMenuLstWraaper>
                    </S.NavContentsWrapper>
                )
            }
        </>
    )
}