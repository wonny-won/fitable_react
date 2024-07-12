import styled from "@emotion/styled"

interface H1Prop {
    style?:{
        color?: string;
        padding?: string;
        fontSize?: string;
    }
}

interface SectionStyleProp {
    style?: {
        flexDirec?: string;
        padding?: string;
        height?:string;
        justify?:string;
        align?:string;
        overflow?:string;
    }
}

//-----------------------------------------------------------------------------------
// Text
//-----------------------------------------------------------------------------------
export const SectionWrapper = styled.section<SectionStyleProp>`
    background-color: #1A1814 ;
    display: flex;
    flex-shrink: 0;
    flex-direction: ${(props)=> props.style?.flexDirec ? props.style?.flexDirec : 'row'};
    justify-content: ${(props)=> props.style?.justify && props.style?.justify};
    padding: ${(props)=> props.style?.padding ? props.style?.padding : '10px 4px'};
    align-items: ${(props)=> props.style?.align && props.style?.align};;
    margin: 4px 0px;
    color: #b3b3b3;
    height: ${(props)=> props.style?.height && props.style?.height};
    overflow: ${(props)=> props.style?.height ? props.style?.height : 'hidden'};
`

export const H1 = styled.h1<H1Prop>`
    color: ${(props)=>(props.style?.color? props.style?.color : '#b3b3b3')};
    font-size: ${(props)=>(props.style?.fontSize? props.style?.fontSize : '40px')};
    margin: 0;
    padding: ${(props)=>(props.style?.padding? props.style?.padding : '')};

`

export const StrongH1 = styled.h1<H1Prop>`
    margin-top: 20px;
    font-size: 60px;
    color: ${(props)=>(props.color? props.color : '#b3b3b3')};
` 

export const H3 = styled.h3`
    color: #b3b3b3;
    font-size: 25px;
    margin: 0 0 20px 0;
    padding: 5px 20px;
`

export const StrongH3 = styled.span`
    font-size: 30px;
    font-weight: 800;
    color: #147af3;
`
//-----------------------------------------------------------------------------------
// Primary (Required)
//-----------------------------------------------------------------------------------
export const Required = styled.span`
    font-size: 13px;
    font-weight: 900;
    color: #fbaf17;
    padding-left: 3px;
`