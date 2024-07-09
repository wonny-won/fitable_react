import styled from "@emotion/styled";

/************************************************************************
 * Types
************************************************************************/
interface StyleProp {
    padding?: string
}

/************************************************************************/

//--------------------------------- local commons ---------------------------------//
export const SectionWrap = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 40px 300px;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 60.59%), conic-gradient(from 224deg at 44.53% 62.16%, rgb(214, 73, 62) 0deg, rgb(214, 85, 90) 61.875deg, rgb(214, 112, 163) 140.625deg, rgb(212, 117, 174) 283.125deg, rgb(214, 82, 82) 360deg);
    color: #fff;
    margin-top:4px;
`
export const ContentsWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 750px;
    margin: 2rem auto;
`

 export const MainText = styled.h3<StyleProp>`
    font-size: 20px;
    font-weight: bolder;
    color: #fff;
    margin: 0;
    padding: ${(props)=>(props.padding? props.padding: '')};
 `

 export const MiniSectionTitle = styled.h3<StyleProp>`
    font-size: 17px;
    font-weight: bolder;
    color: #fff;
    margin: 0;
    padding-top: 40px;
 `

export const Line = styled.hr`
    border: 0.7px solid #3b3b3b;
    width: 100%;
    margin-top: 40px;
`

 export const NormalTxt = styled.p<StyleProp>`
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: ${(props)=>(props.padding && props.padding)};
 `

 export const Text1 = styled.div`
    font-size: 15px;
    font-weight: 700;
 `
 export const Text2 = styled.div`
    font-size: 14px;
    font-weight: 700;
    padding: 40px 0 0 20px;
 `
 export const Text3 = styled.div`
    font-size: 13px;
    font-weight: 500;
    padding-top: 8px;
 `

//---------------------------------- simpleMentoInfo style --------------------------------//
export const MentoBasicInfo = styled.div`
    display: flex;
`
export const Img = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 20px;
    font-size: 14px;
    font-weight: 600;
`

 export const BtnWrap = styled.div`
    display: flex;
    align-items: end;
`

//---------------------------------- MainMentoInfoSection style --------------------------------//
export const TagWrap = styled.div`
    padding: 10px 0px;
    display: flex;
`
export const TxtWrap = styled.div`
    padding: 10px;
    background-color: #292929;
    border-radius: 5px;
    margin: 15px 0px 10px 0px;
`