import * as echarts from 'echarts/core';
import {BarChart,PieChart} from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    VisualMapComponent
  } from 'echarts/components';  
import { useEffect } from 'react';

export default function BaseChart(props:any){
    echarts.use([
        BarChart,
        PieChart,
        TitleComponent,
        TooltipComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent,
        VisualMapComponent,
        // LabelLayout,
        // UniversalTransition,
        CanvasRenderer
    ])

    useEffect(()=>{
        const chartInst = echarts.init(document.getElementById(props.title));
        chartInst.setOption(props.option);
    },[])

    return(
            <div id={props.title} style={{width:'95%',height:'250px'}}/>
    )
}