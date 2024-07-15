import TextField from "components/atom/textField/textField";

export default function JoinUsTextFiled (){
    const textfiledStlye = {width:'250px'}
    return(
        <>   
            <TextField id='nickname' inputTitle="닉네임" style={textfiledStlye}/>
            <TextField id='name' inputTitle="이름" style={textfiledStlye}/>
            <TextField id='phone' inputTitle="연락처" style={textfiledStlye}/>
            <TextField id='email' inputTitle="email" style={textfiledStlye}/>
            <TextField id='name' inputTitle="이름" style={textfiledStlye}/>
        </>
    )
}