import styled from "@emotion/styled";
import { ReactNode } from "react";

/*********************************************************************
 * Style Props Types
 *********************************************************************/
interface NavMenu {
    isActive: boolean;
    children: ReactNode[];
}
interface MeunBtnProp {
    isActive?: boolean;
    children: ReactNode;
}
interface NavMenuLstWraaperProp {
    isActive?: boolean;
    children: ReactNode;
}

/*********************************************************************
 * Styles
 *********************************************************************/
export const NavContentsWrapper = styled.div`
    height: 100vh;
    display: flex;
`

export const NavBarWrapper = styled.nav<NavMenu>`
    height: 100vh;
    width: 64px;
    background-color: #292929;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transform:${(props)=>(props.isActive? 'translateX(0)' :'translateX(-70px)')};
    transition: transform,width 2s linear;
    z-index: 1;
`

export const UserProfileArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #1A1814;
`

export const MeunBtn = styled.button<MeunBtnProp>`
    width: 64px;
    height: 64px;
    background-color: ${(props) => (props.isActive ? '#1A1814' : 'transparent')};
    border: none;
    border-right: 5px solid ${(props) => (props.isActive ? '#147AF3' : 'transparent')};
    
    &:hover{
        background-color: #1A1814;
        border-right: 5px solid #147AF3;
        cursor: pointer;
    }
`

export const FloatFullScreenBtn = styled.button<MeunBtnProp>`
width: 64px;
height: 64px;
border-radius: 50%;
background-color: ${(props) => (props.isActive ? '#1A1814' : '#292929')};
position: fixed;
bottom: 10px;
left: 10px;

&:hover{
        background-color: #1A1814;
        cursor: pointer;
    }
`

export const NavMenuLstWraaper = styled.div<NavMenuLstWraaperProp>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${(props)=>(props.isActive? '220px':'0')};
    height: 100vh;
    background-color: #1A1814;
    transform:${(props)=>(props.isActive? 'translateX(0)' :'translateX(-220px)')};
    transition: all 0.3s linear 0s;
`
export const LstArea = styled.ul`
    margin: 0;
    padding-left: 10px;
    padding: 60px 10px;
`