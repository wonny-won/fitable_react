import { IconCommonSvg } from "./styled/iconCommonStyle";
import { IconProp } from "./types/iconTypes";

export default function UserProfile (props:IconProp){
    const {width,height,color,bgColor} = props

    return(
        <>
            <IconCommonSvg width={width?width:"20"} height={height?height:"21"} color={bgColor?bgColor:''} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.42857H17.8571V6H17.1429V3.42857H15V2.57143H17.1429V0H17.8571V2.57143H20V3.42857Z" fill={color?color:"black"}/>
                <circle cx="9" cy="7.5" r="4.5" fill={color?color:"black"}/>
                <path d="M3.375 14H14.625L18 21H0L3.375 14Z" fill={color?color:"black"}/>
            </IconCommonSvg>
        </>
    )
}