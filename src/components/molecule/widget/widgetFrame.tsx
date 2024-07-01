import * as S from './styled'

type SlotComp = {
    children?: React.ReactNode
}

export default function WidgetFrame (props:SlotComp){
    return(
        <>
            <S.WidgetWrapper>
                <S.WidgetTitleArea>위젯 타이틀</S.WidgetTitleArea>
                <S.ChartArea>
                    {props.children}
                </S.ChartArea>
            </S.WidgetWrapper>
        </>
    )
}