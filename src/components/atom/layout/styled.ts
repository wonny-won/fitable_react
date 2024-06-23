import styled from "@emotion/styled";

export const Wrapper = styled.li`
    width: 100%;
    list-style-type: none;
    &:hover{
        cursor: pointer;
        div > li{
            color:#fff;
        }
        hr{
            visibility: visible;
            width: 90%;
            transition: width 0.5s ease, margin-left 0.5s ease;
        }
    }
`
export const LinkWrap = styled.a`
    text-decoration-line: none;
`
export const NavMenuWrapper = styled.div`
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    flex-shrink: 0;
`
export const MenuTitle = styled.span`
    color: #b3b3b3;
    transition: all 0.5s linear;
    flex-shrink: 0;
`
export const HoverUnderLine = styled.hr`    
    visibility: hidden;
    width: 0;
    margin: 0px 2px 0 6px;
    border: 1px solid #595959;
`
