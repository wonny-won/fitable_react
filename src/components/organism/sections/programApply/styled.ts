import styled from "@emotion/styled";

export const ProgramTitleWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
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