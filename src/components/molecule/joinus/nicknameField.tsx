import TextField from "components/atom/textField/textField"
import { PropType } from "./commonTypes"
import { memo } from "react"

function NickNameFeild (props: PropType){
    const {onChangeHandler} = props
    const textFieldParam = {
        id:'nickname',
        inputTitle:"닉네임",
        style:{width:'250px'},
        onChangeHandler
    }

    return(
        <TextField {...textFieldParam}/>
    )
}
export default memo(NickNameFeild)