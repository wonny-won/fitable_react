export const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '13%',
      right: '3%',
      top: '3%',
      bottom: '22%',
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        itemStyle:{
            color:'#147AF3'
        },
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {
        name: '2012',
        type: 'bar',
        itemStyle:{
            color: '#c23531'
        },
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
    ]
  };