import * as S from './styled'

interface ButtonProp {
    text?:string;
    style?:{};
    iconStyles?:{};
    isuseIcon?:boolean;
    iconComp?: React.ReactNode;
    onClickHandler?:()=>void;
}

export default function Button (props:ButtonProp){
    const {text,style,isuseIcon,iconComp,onClickHandler} = props
    
    return(
        <S.Button style={style} onClick={onClickHandler}>
            {isuseIcon ? iconComp : (text? text : '확인')}
        </S.Button>
    )
}