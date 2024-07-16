import TextField from "components/atom/textField/textField"
import { PropType } from "components/molecule/joinus/commonTypes"
import { memo } from "react"

function PhoneField (props: PropType){
    const {onChangeHandler} = props
    const textFieldParam = {
        id:'phone',
        inputTitle:"연락처",
        style:{width:'250px'},
        onChangeHandler
    }

    return (
        <TextField {...textFieldParam}/>
    )
}
export default memo(PhoneField)
