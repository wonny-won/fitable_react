import { IconCommonSvg } from "./styled/iconCommonStyle";
import { IconProp } from "./types/iconTypes";

export default function ArrowRight(props:IconProp){
    const {width,height,color} = props
    return(
        <>
            <IconCommonSvg width={width?width:"24"} height={height?height:"24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1127_516)">
                    <path d="M10.0001 6L8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6Z" fill={color?color:"black"}/>
                </g>
                <defs>
                    <clipPath id="clip0_1127_516">
                    <rect width={width?width:"24"} height={height?height:"24"} fill="white"/>
                    </clipPath>
                </defs>
            </IconCommonSvg>

        </>
    )
}