import { useCustomChangeHandler } from "commons/hooks/useChangeHandler";
import NickNameFeild from '../../molecule/joinus/nicknameField'
import NameField from '../../molecule/joinus/nameField'
import PhoneField from '../../molecule/joinus/phoneField'
import EmailField from '../../molecule/joinus/emailField'

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
            <NickNameFeild onChangeHandler={onChangeHandler}/>
            <NameField onChangeHandler={onChangeHandler}/>
            <PhoneField onChangeHandler={onChangeHandler}/>
            <EmailField onChangeHandler={onChangeHandler}/>
            {/* <TextField id='name' inputTitle="이름" {...textFildParam}/> */}
        </>
    )
}