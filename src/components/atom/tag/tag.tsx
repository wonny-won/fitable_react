import * as S from './styled'

interface PropsType {
    data?:string
}

export default function Tag (props:PropsType){
    const {data} = props
    return (
        <>
            <S.TagWrap>
                # {data}
            </S.TagWrap>
        </>
    )
}