import Star from "components/atom/icons/star"

export default function (props: {rate?:number}){
    const { rate } = props
    const rateArr = [0,0,0,0,0]
    if(rate){
        for(let i = 1; i<=rate; i++){
            rate - i >= 0 ? rateArr[i-1] = 1 : rateArr[i-1] = 0
        }
    }

    return(
        <>
            {
                rateArr.map((i)=>(<Star isFill={i}/>))
            }
        </>
    )
}