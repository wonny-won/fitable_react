import { useState } from "react"

/*******************************************************************
 * style props
 *******************************************************************/
    export const SectionStyle = {height: '100vh',flexDirec:'column',justify:''}
    export const H1Style = {
        fontSize:'18px',
        padding: '0 20px',
    }

/*******************************************************************
 *  local variables
 *******************************************************************/
export const titleArr = ['Portfolio Feedback ' ,'Resume Feedback']
export const logoImgArr = [
    '/assets/naver.png','/assets/kakao.png','/assets/line.png','/assets/coupang.png','/assets/baemin.png','/assets/carrot_market.png','/assets/toss.png','/assets/whatap.png','/assets/kurly.png',
    '/assets/naver.png','/assets/kakao.png','/assets/line.png','/assets/coupang.png','/assets/baemin.png','/assets/carrot_market.png','/assets/toss.png','/assets/whatap.png','/assets/kurly.png',
'/assets/naver.png','/assets/kakao.png','/assets/line.png','/assets/coupang.png','/assets/baemin.png','/assets/carrot_market.png','/assets/toss.png','/assets/whatap.png','/assets/kurly.png']

/*******************************************************************
 *  local hooks & functions 
 *******************************************************************/
export const useProgramChangeHandler = ()=>{
    const [program,setProgram] = useState('portfolio') 
    const onChangeProgram = (program:string)=>{
        const data =  (program.split(' ')[0]).toLowerCase()
        setProgram(data)

    }

    return {
        program,
        onChangeProgram
    }
}