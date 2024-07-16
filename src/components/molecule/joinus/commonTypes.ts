import { ChangeEvent } from "react";

export interface PropType {
    onChangeHandler: (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
}
