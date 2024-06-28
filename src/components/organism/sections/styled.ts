import styled from "@emotion/styled";

interface FelxDirection {
    style?: {
        flexDirec?: string;
        justify?: string;
        padding?: string;
    }
}
interface ColorProp {
    color?: string
}

//-------------------------------[ common style ]-------------------------------

export const SectionWrapper = styled.section<FelxDirection>`
    background-color: #1A1814 ;
    display: flex;
    flex-direction: ${(props)=> props.style?.flexDirec? props.style?.flexDirec : 'row'};
    justify-content: space-between;
    padding: ${(props)=> props.style?.padding? props.style?.padding : '10px 4px'};
    margin: 4px 0px;
    color: #b3b3b3;
`
export const H1 = styled.h1<ColorProp>`
    color: ${(props)=>(props.color? props.color : '#b3b3b3')};
    font-size: 40px;
    margin-top: 0;
`

export const StrongH1 = styled.h1<ColorProp>`
    margin:0;
    font-size: 60px;
    color: ${(props)=>(props.color? props.color : '#b3b3b3')};
` 

export const H3 = styled.h3`
    color: #b3b3b3;
    font-size: 25px;
    margin: 10px 0;
    padding: 5px 20px;
`

export const StrongH3 = styled.span`
    font-size: 30px;
    font-weight: 800;
    color: #147af3;
`

//-------------------------------[ local style ]-------------------------------

//--- HomeChartSection.tsx
export const ChartAreat = styled.div`
    display: flex;
    justify-content: space-between;
    color: #1a1814;
`

//--- HomeIntro.tsx
export const BgSectionWrap = styled.section`
    height: calc(100vh - 64px);
    background-image: url('/homeIntro.jpg');
    background-size: cover;
    background-position:32%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute ;
    top: 300px;
`