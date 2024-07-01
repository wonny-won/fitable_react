import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const ApplyBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    position: relative;
`

const logoAnimaition = keyframes`
    0% {
        left: -100px;
    }
    100% {
        left: 100%;
    }
`

export const LogoWrap = styled.div`
    position: absolute;
    left: -100px;
    margin: 90px 20px;
    display: flex;
    flex-wrap: nowrap;
    transform: translateX(-50%);
    animation: ${logoAnimaition} 10s linear infinite;
`

export const LogoImg = styled.img`
    margin: 0 15px;
` 

export const ProgramTitleWrap = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 120px;
`

export const TitleWrap = styled.div`
display: flex;
align-items: center;
height: 60px;
&:hover{
    cursor: pointer;
    hr {
            visibility: visible;
            width: 90%;
            transition: width 0.5s ease, margin-left 0.5s ease;
        }
}
`

export const HoverLine = styled.hr`
    visibility: hidden;
    width: 0;
    margin: 0px 2px 0 6px;
    border: 1px solid #595959;
`

export const CardSection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
`