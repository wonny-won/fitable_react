import { useParams } from "react-router-dom"

export default function ApplyMento(){
    // 파라미터에서 id값을 끌어와백엔드에 날리기
    const idParam = useParams()
    console.log(idParam)

    return (
        <>
            멘토페이지
        </>
    )
}