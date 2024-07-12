import { useRecoilState } from 'recoil';
import * as S from './styled'
import { isOpenLayerPopup } from 'commons/utils/recoil/atom';

interface PropType {
    children: React.ReactNode;
}

export default function LayerPopup (props:PropType) {
    const [isOpen,_] = useRecoilState(isOpenLayerPopup)

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