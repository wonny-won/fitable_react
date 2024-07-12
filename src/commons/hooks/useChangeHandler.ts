import { ChangeEvent, useState } from "react"

// 일반화 성공 함수 - 프로젝트 어느 input / textArea 에도 적용이 가능. 

/** 
 * input change 커스텀 훅스 핸들러 
 * @returns inputs,onChangeHandler
 * 
 * [ 설 명 ]
 *  1. inputs : 각 inputs / textArea의 state 
 *  2. onChangeHandler : 각 inputs / textArea 의 상태값(state)을 끌어오는 onChange 함수
 * 
 * [ 참 고 ]
 *  1. 각 input / textArea 컴포넌트에 porps로 id 값을 내려줘야 한다.
 *  2. 각 id 값은 유니크해야 하며 스트링 값이다.
 */
export const useCustomChangeHandler = ()=>{
    const [inputs,setInpus] = useState({})

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        const textFieldsId = e.target.id 
        setInpus({...inputs, [textFieldsId] :e.currentTarget.value})
    }

    return{
        inputs,
        onChangeHandler
    }
}