import * as S from './styled'

interface PropType {
    children: React.ReactNode;
    isOpen?: boolean
}

export default function LayerPopup (props:PropType) {
    const {isOpen} = props

    return (
        <>
            {
                isOpen &&
                    <S.PopupContentWrap>
                        {props.children}
                    </S.PopupContentWrap>   
            }
        </>
    )
}