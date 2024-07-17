import { memo } from "react"
import * as S from './styled'
import * as CS from '../../commonStyle'

interface InputFieldProp {
    inputTitle?:string;
    isRequired?:boolean;
}

function InputFeild (props:InputFieldProp){
    const {inputTitle,isRequired} = props

    return( 
        <S.InputTitle>
            {inputTitle}{isRequired && <CS.Required>*</CS.Required>}
        </S.InputTitle>
    )
}
export default memo(InputFeild)
