import { IconProp } from "./types/iconTypes";
import { IconCommonSvg } from "./styled/iconCommonStyle";

export default function My (props: IconProp) {
    const {width,height,color,bgColor} = props

    return(
        <>
            <IconCommonSvg width={width?width:"18"} height={height?height:"18"} color={bgColor?bgColor:''} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="4.5" r="4.5" fill={color?color:"black"}/>
                <path d="M3.375 11H14.625L18 18H0L3.375 11Z" fill={color?color:"black"}/>
            </IconCommonSvg>
        </>
    )
}