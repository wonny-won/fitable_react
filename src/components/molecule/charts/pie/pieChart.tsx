import BaseChart from "commons/component/charts/baseChart";
import { option } from "./chartOpt";

export default function PieChart(){
    return(
        <>
            <BaseChart option={option} title={'bar'}/>
        </>
    )
}