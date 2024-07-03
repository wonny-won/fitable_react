import * as S from './styled'

interface ButtonProp {
    text?:string;
    style?:{};
    isuseIcon?:boolean;
    iconComp?: React.ReactNode
}

export default function Button (props:ButtonProp) {
    const {text,style,isuseIcon,iconComp} = props
    return(
        <S.Button style={{...style}}>
            {isuseIcon ? iconComp : (text? text : '확인')}
        </S.Button>
    )
}