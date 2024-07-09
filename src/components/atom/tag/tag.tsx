import * as S from './styled'

interface PropsType {
    data?:string
    style?:{}
}

export default function Tag (props:PropsType){
    const {data,style} = props
    return (
        <>
            <S.TagWrap style={style}>
                # {data}
            </S.TagWrap>
        </>
    )
}