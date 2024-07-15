import TextField from "components/atom/textField/textField";

export default function JoinUs (){
    return(
        <section>
            <TextField id='name' inputTitle="이름"/>
            <TextField id='nickname' inputTitle="닉네임"/>
            <TextField id='phone' inputTitle="연락처"/>
            <TextField id='email' inputTitle="email"/>
            <TextField id='name' inputTitle="이름"/>
        </section>
    )
}