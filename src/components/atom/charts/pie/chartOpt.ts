export const option = {
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '언어별 접수량',
        type: 'pie',
        radius: '55%',
        center: ['50%', '45%'],
        data: [
          { value: 535, name: 'Python' },
          { value: 410, name: 'Jvav' },
          { value: 374, name: 'Java Script' },
          { value: 335, name: 'Flutter' },
          { value: 500, name: 'Kotlin' }
        ].sort(function (a, b) {
          // 크기별 정렬
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx:number) {
          return Math.random() * 200;
        }
      }
    ]
  };