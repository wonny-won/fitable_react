import { useState } from "react"

/*******************************************************************
 * Page Icon/Btn Style Props
 *******************************************************************/
export const iconParam = {
    menu:{
        width: '24px',
        height:'24px',
        color:'#b3b3b3'
    },
    my: {
        width: '24px',
        height:'24px',
        color:'#b3b3b3'
    },
    userProfile: {
        width: '24px',
        height:'24px',
        color:'#b3b3b3',
        bgColor: '#1A1914'
    },
    fullScreen:{
        width: '30px',
        height:'30px',
        color:'#b3b3b3'
    }
}

export const ButtonActive = {
    menu: false,
    fullScreen: true
}

/*******************************************************************
 * Page variation
 *******************************************************************/
export const menuLst = [
    {
        title:'HOME',
        subLst: []
    },
    {
        title:'FEEDBACK PROGRAM',
        subLst: ['Resume','Portfolio']
    },
]
export const loginMenuLst = ['Login','Join Us']

/*******************************************************************
 * Page Functions
 *******************************************************************/
export const useIsActiveState = ()=>{
    const [isActive,setIsActive] = useState(ButtonActive)
    const onClickChangeIsActive = (activeParam:'menu' | 'fullScreen')=>{setIsActive({...isActive,[activeParam]:!isActive[activeParam]})}

    return {
        isActive,
        onClickChangeIsActive
    }
}