import TextField from "components/atom/textField/textField"
import { PropType } from "components/molecule/joinus/commonTypes"
import { memo } from "react"

function NameField (props: PropType){
    const {onChangeHandler} = props
    const textFieldParam = {
        id:'name',
        inputTitle:"이름",
        style:{width:'250px'},
        onChangeHandler
    }
    
    return (
        <TextField {...textFieldParam}/>
    )
}
export default memo(NameField)
