import TextField from "components/atom/textField/textField"
import { PropType } from "components/molecule/joinus/commonTypes"
import { memo } from "react"

function EmailField (props: PropType){
    const {onChangeHandler} = props
    const textFieldParam = {
        id:'email',
        inputTitle:"이메일",
        style:{width:'250px'},
        onChangeHandler
    }

    return (
        <TextField {...textFieldParam}/>
    )
}
export default memo(EmailField)