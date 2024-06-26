import styled from "@emotion/styled";

interface FelxDirection {
    style?: {
        flexDirec?: string;
        justify?: string;
        padding?: string;
    }
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


