import { useState } from "react"

/*******************************************************************
 * Icon/Btn Style Props
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


/*******************************************************************
 * Variation
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

export const ButtonActive = {
    menu: false,
    fullScreen: true
}

/*******************************************************************
 * Functions
 *******************************************************************/
/**
 * 각 버튼 활성 여부 fn
 * @returns isActive: 활성 여부 , onClickChangeIsActive: setState fn
 * 
 * ButtonActive 내부의 key값으로 각자 버튼 동작 분리
 */
interface SetStateParam {
    menu: boolean;
    fullScreen: boolean;
}
export const useIsActiveState = ()=>{
    const [isActive,setIsActive] = useState(ButtonActive)
    const onClickChangeIsActive = (activeParam:'menu' | 'fullScreen')=>{setIsActive({...isActive,[activeParam]:!isActive[activeParam]})}

    return {
        isActive,
        onClickChangeIsActive
    }
}