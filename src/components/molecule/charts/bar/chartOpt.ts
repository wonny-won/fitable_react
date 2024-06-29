const today = new Date()

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
      data: ['Java Script', 'Jvav', 'Flutter', 'Python', 'Kotlin']
    },
    series: [
      {
        name: '이력서 피드백',
        type: 'bar',
        itemStyle:{
            color:'#147AF3'
        },
        data: [
          100,
          20,
          24,
          40,
          120,
        ]
      },
      {
        name: '포트폴리오 피드백',
        type: 'bar',
        itemStyle:{
            color: '#c23531'
        },
        data: [
          435,
          390,
          350,
          290,
          380,
        ]
      }
    ]
  };