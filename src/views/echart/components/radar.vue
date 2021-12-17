<template>
    <div ref="chart" style="width: 100%;height: 600px"></div>
</template>

<script>
  import * as echarts from "echarts";

  export default {
    data() {
      return {
        myChart: null
      };
    },
    created() {
      this.$nextTick(() => {
        this.init();
      });
    },
    methods: {
      init() {
        if (this.myChart) {
          this.myChart.dispose();
        }
        this.myChart = echarts.init(this.$refs.chart);
        const option = {
          tooltip: {
            trigger: "item",
            axisPointer: {
              type: "shadow"
            },
            padding: [5, 10],
            textStyle: {
              fontSize: 13,
              color: "#fff"
            },
            backgroundColor: "rgba(0,0,0,0.7)",
            borderWidth: 0
          },
          legend: {
            orient: "vertical",
            right: 20,
            bottom: 20,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: "#4e719a"
            },
            data: ["省属", "地市"]
          },
          color: ["#387dfe", "#15dbe7"],
          radar: {
            indicator: [
              { name: "公司制", max: 1000, color: "#4e719a" },
              { name: "合伙制", max: 1000, color: "#4e719a" },
              { name: "特殊登记", max: 1000, color: "#4e719a" },
              { name: "其他", max: 1000, color: "#4e719a" }
            ],
            center: ["50%", "50%"],
            radius: "70%",
            axisLabel: {
              color: "#fff"
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#192b5f"
              }
            },
            splitArea: {
              areaStyle: {
                color: "rgba(255, 255, 255, 0)"
              },
              lineStyle: {
                color: "#192b5f"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#192b5f"]
              }
            }

          },
          series: [
            {
              name: "",
              type: "radar",
              data: [
                {
                  value: [800, 500, 620, 530, 550, 680, 420],
                  name: "省属",
                  areaStyle: {
                    color: "#387dfe",
                    opacity: 0.3
                  }
                },
                {
                  value: [600, 940, 880, 460, 720, 310, 900],
                  name: "地市",
                  areaStyle: {
                    color: "#15dbe7",
                    opacity: 0.3
                  }
                }
              ]
            }
          ]
        };
        this.myChart.setOption(option);
      }
    }
  };
</script>

<style scoped>
    #radar {
        background-color: #080b26;
    }
</style>
