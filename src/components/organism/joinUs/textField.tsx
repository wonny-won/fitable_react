import { useCustomChangeHandler } from "commons/hooks/useChangeHandler";
import TextField from "components/atom/textField/textField";
import {textfieldParam} from './uils'

export default function JoinUsTextFiled (){
    const initJoinInputParam = {
        nickname:'',
        name:'',
        phone:'',
        email:''
    }
    const {inputs,onChangeHandler} = useCustomChangeHandler(initJoinInputParam)
    console.log(inputs)

    return(
        <>   
            <TextField {...textfieldParam['nickname']} onChangeHandler={onChangeHandler}/>
            <TextField {...textfieldParam['name']} onChangeHandler={onChangeHandler}/>
            <TextField {...textfieldParam['phone']} onChangeHandler={onChangeHandler}/>
            <TextField {...textfieldParam['email']} onChangeHandler={onChangeHandler}/>
        </>
    )
}