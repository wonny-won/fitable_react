/**
 * Star Icon
 * @param props isFill (색상 채우는지 여부)
 * @returns 별 아이콘
 */

interface PropType {
    isFill?:number   
}

export default function Star (props:PropType) {
    const { isFill } = props   
    return(
        <>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1281_1209" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                    <rect x="0.5" y="0.5" width="49" height="49" fill="#D9D9D9" stroke="black"/>
                </mask>
                <g mask="url(#mask0_1281_1209)">
                    <path d="M12.8887 44.7949L16.0078 31.3106L16.0756 31.0173L15.8482 30.8201L5.38652 21.7501L19.2097 20.5502L19.5098 20.5242L19.6271 20.2467L24.9998 7.53436L30.3726 20.2467L30.4899 20.5242L30.7899 20.5502L44.6131 21.7501L34.1515 30.8201L33.924 31.0173L33.9919 31.3106L37.111 44.7949L25.2581 37.6448L24.9998 37.489L24.7416 37.6448L12.8887 44.7949Z" fill={isFill?"#147AF3":'transparent'} stroke="black"/>
                </g>
            </svg>
        </>
    )
}