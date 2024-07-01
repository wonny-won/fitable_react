import styled from "@emotion/styled";

export const CardWrap = styled.div`
    width: 280px;
    height: 350px;
    border: 1px solid #212121;
    border-radius: 10px;
    margin: 20px;
    &:hover{
        cursor: pointer;
    }
`

export const MainInfo = styled.div`
    height: 45%;
    padding: 15px;
    border-bottom: 1px solid #292929;
    border-radius: 10px 10px 0 0;
    background: linear-gradient(45deg, #147af3, violet);
`

export const Image = styled.div`
    background-color: #fff;
    border: 1px solid #292929;
    border-radius: 50%;
    width: 70px;
    height: 70px;
`
export const MentoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 0 0 5px;
`

export const Name = styled.div`
    font-size: 15px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 10px;
`

export const Company = styled.div`
    margin: 2px 0;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
`

export const Description = styled.div`
    height: 38%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    border-radius: 0 0 10px 10px;
    background-color: #292929;
`

export const FeedbackeCount = styled.div`
    color: #147af3;
    font-size: 12px;
    font-weight: 700;
`

export const AppealDesc = styled.div`
    font-size: 13px;
    font-weight: 600;
    padding: 10px 0;
`

export const TagWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Tag = styled.div`
    min-width: 55px;
    text-align: center;
    color:black;
    font-size: 10px;
    font-weight: 500;
    padding: 5px;
    border-radius: 3px;
    background-color: aliceblue;
    margin: 2px;
`