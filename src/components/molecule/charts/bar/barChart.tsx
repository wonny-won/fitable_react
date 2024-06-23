import BaseChart from "commons/component/charts/baseChart";
import { option } from "./chartOpt";

export default function BarChart(){
    return(
        <>
            <BaseChart option={option} title={'pie'}/>
        </>
    )
}