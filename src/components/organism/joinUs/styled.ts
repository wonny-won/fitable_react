import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const TextFeildWrap = styled.div`

`

export const BtnWrap = styled.div`
    display: flex;
`

const typing = keyframes`
 from{
    width: 0%;
 }
 to{
    width: 100%;
 }
`
export const BannerWrap =styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 40px;
    color: #fff;
`
export const containter = styled.div`
    display: inline-block;
    border-right: 1px solid transparent ;
`
const animation = styled.p`
    white-space: nowrap;
    overflow: hidden;
    width: 0%;
    animation: ${typing} 2s steps(30, end) forwards;
`
export const ValueOfTogather = styled(animation)`
    font-size: 60px;
    font-weight: 1000;
    margin: 0;
` 
export const MainTitle = styled(animation)`
    width: 0;
    font-size: 90px;
    font-weight: 4500;
    color: #147fa3;
    margin: 0;
    animation: ${typing} 1.5s 1.9s steps(30, end) forwards;
`
