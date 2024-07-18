import { useParams } from "react-router-dom"
import { mentoInfo } from "commons/utils/mockData"
import SimpleMentoInfoSection from "components/organism/programMento/simpleMentoInfoSection"
import MainMentoInfoSection from "components/organism/programMento/mainMentoInfoSection"
import { memo } from "react"

function ProgramMento(){
    // 파라미터에서 id값을 끌어와백엔드에 날리기
    const idParam = useParams().id?.split(':')[1]
    const data = idParam && mentoInfo[idParam]
   
    return (
        <>
            <SimpleMentoInfoSection data={data}/>
            <MainMentoInfoSection data={data}/>
        </>
    )
}
export default memo(ProgramMento)