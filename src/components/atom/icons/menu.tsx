import { IconProp } from "./types/iconTypes";
import { IconCommonSvg } from "./styled/iconCommonStyle";


export default function Menu(props:IconProp){
    const {width,height,color} = props
    return(
        <>
            <IconCommonSvg width={width?width:"18"} height={height?height:"12"} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill={color?color:"black"}/>
            </IconCommonSvg>
        </>
    )
}