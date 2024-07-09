import { useParams } from "react-router-dom"
import { mentoInfo } from "commons/utils/mockData"
import SimpleMentoInfoSection from "components/organism/sections/programMento/simpleMentoInfoSection"
import MainMentoInfoSection from "components/organism/sections/programMento/mainMentoInfoSection"
import TextField from "components/atom/textField/textField"

export default function ProgramMento(){
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
