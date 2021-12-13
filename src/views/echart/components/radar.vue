<template>
    <div ref="chart" style="width: 100%;height: 600px"></div>
</template>

<script>
  import * as echarts from "echarts";
  export default {
    data() {
      return {
        myChart: null
      }
    },
    created() {
      this.$nextTick(() => {
        this.init()
      })
    },
    methods: {
      init() {
        if (this.myChart) {
          this.myChart.dispose()
        }
        this.myChart = echarts.init(this.$refs.chart)
        const option = {
          color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],

          legend: {},
          radar: [

            {
              indicator: [
                { text: 'Indicator1', max: 150 },
                { text: 'Indicator2', max: 150 },
                { text: 'Indicator3', max: 150 },
                { text: 'Indicator4', max: 120 },
                { text: 'Indicator5', max: 108 },
                { text: 'Indicator6', max: 72 }
              ],
              center: ['50%', '50%'],
              radius: 120,
              axisName: {
                color: '#387dfe',
                backgroundColor: '#666',
                borderRadius: 3,
                padding: [3, 5]
              }
            }
          ],
          series: [
            {
              type: 'radar',
              radarIndex: 0,
              data: [
                {
                  value: [120, 118, 130, 100, 99, 70],
                  name: 'Data C',
                  symbol: 'rect',
                  symbolSize: 12,
                  lineStyle: {
                    type: 'dashed'
                  },
                  label: {
                    show: true,
                    formatter: function (params) {
                      return params.value;
                    }
                  }
                },
                {
                  value: [100, 93, 50, 90, 70, 60],
                  name: 'Data D',
                  areaStyle: {
                    color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                      {
                        // color: 'rgba(255, 145, 124, 0.1)',
                        color: '#333',
                        offset: 0
                      },
                      {
                        color: '#fff',
                        offset: 1
                      }
                    ])
                  }
                }
              ]
            }
          ]
        };
        this.myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>
    #radar {
        background-color: #080b26;
    }
</style>
