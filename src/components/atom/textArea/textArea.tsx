import { ChangeEvent, memo } from 'react';
import * as S from './style'
import { RegisterOptions, useForm, UseFormRegisterReturn } from 'react-hook-form';

type Inputs = {[id:string]:string}
interface PropType {
    id: string;
    textAreaTilte: string;
    onChangeHandler?:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
    resister?: (name: [id:string], options?:RegisterOptions<Inputs> | undefined) => UseFormRegisterReturn<any>
}

const TextArea = (props:PropType)=>{
    const {id,textAreaTilte,onChangeHandler,resister} = props
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
    
    return(
        <S.TextAreaWrap>
            <S.TextAreaTilte> {textAreaTilte} </S.TextAreaTilte>
            <S.TextArea id={id} onChange={onChangeHandler} {...resister}/>
        </S.TextAreaWrap>
    )
}
export default memo(TextArea)