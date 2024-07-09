import styled from "@emotion/styled";

interface styleProp {
    padding?: string;
    backgroundColor?: string;
    marginTop?: string;
    borderRadius?: string;
    border?: string;
}

export const ReviewCardWrap = styled.div <styleProp>`
    padding: ${(props)=>(props.padding? props.padding : '15px')};
    background-color: ${(props)=>(props.backgroundColor? props.backgroundColor : '#292929')};
    margin-top: ${(props)=>(props.marginTop? props.marginTop : '10px')};
    border-radius: ${(props)=>(props.borderRadius? props.borderRadius : '5px')};
    border: ${(props)=>(props.border && props.border)};
`

export const ReviewSynthesis = styled.div`
    display: flex;
    align-items: center;
`

export const ReviewerName = styled.div`
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    padding: 0 10px;
`

export const StartWrap = styled.div`
    padding: 0 15px;
`

export const DescWrap = styled.div`
    padding: 20px 10px;
    font-size: 14px;
`