<template>
    <div ref="echart" id="map"></div>
</template>

<script>
  import * as echarts from "echarts";
  import GuangDong from "echarts/map/json/province/guangdong";
  import China from "echarts/map/json/china";
  import GuiZhou from "echarts/map/json/province/guizhou";

  export default {
    data() {
      return {
        myChart: null
      };
    },
    created() {
      this.$nextTick(() => {
        this.drawMap();
      });

    },
    methods: {
      drawMap() {
        if (this.myChart) {
          this.myChart.dispose();
        }
        this.myChart = echarts.init(this.$refs.echart);
        echarts.registerMap("广东", GuangDong);
        // echarts.registerMap("广州", GuiZhou);
        this.optionXyMap01 = {
          timeline: {
            show: false
          },
          baseOption: {
            animation: true,
            animationDuration: 1000,
            animationEasing: "cubicInOut",
            animationDurationUpdate: 1000,
            animationEasingUpdate: "cubicInOut",
            tooltip: {
              show:false,
              trigger: "item", // hover触发器
              confine: true,
              formatter: (e) => {
              }
            },
            geo:[
              {
                show: true,
                map: "广东",
                roam: true, //是否允许缩放
                zoom: 1,
                label: {
                  emphasis: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: "#021778",
                    borderWidth: 1,
                    // 地区的颜色
                    areaColor:'#010553',
                    // areaColor: {
                    //   type: "radial",
                    //   x: 0.5,
                    //   y: 0.5,
                    //   r: 0.8,
                    //   colorStops: [{
                    //     offset: 0,
                    //     color: "rgba(56, 153, 255, 0)" // 0% 处的颜色
                    //   }, {
                    //     offset: 1,
                    //     color: "rgba(1, 5, 83, .1)" // 100% 处的颜色
                    //   }],
                    //   globalCoord: false // 缺省为 false
                    // },
                    // shadowColor: "#3899ff",//地图边框颜色
                    // shadowOffsetX: -1,
                    // shadowOffsetY: 1,
                    // shadowBlur: 1
                  },
                  emphasis: {
                    show:false,
                    areaColor: "#ffdf18",//鼠标经过时区域的颜色
                    borderWidth: 0
                  }
                },
                regions: [{
                  name: '广州市',
                  itemStyle: {
                    // borderWidth: 5,
                    // areaColor:'#ffdf18',
                    // borderColor:'#2d6cff',
                    // shadowColor: 'rgba(255, 221, 25, 0.5)',
                    // shadowBlur: 10
                  }
                }]
              },

            ]
          },
          options: [{
            series: [
              //地图点的动画效果
              {
                type: "effectScatter",
                coordinateSystem: "geo",
                data: [
                //   {
                //   name: "广州",
                //   value: [113.280637, 23.125178, 90]//前面是坐标，后面是值,
                // }
                ],

                symbolSize: (val) => {
                  return val[2] / 10;
                },
                rippleEffect: {//波纹绘制方式
                  brushType: "stroke"
                },
                hoverAnimation: true,
                label: {
                  normal: {
                    formatter: "{b}",
                    position: "right",
                    show: false // 是否显示公司名称
                  }
                },
                itemStyle: {
                  normal: {
                    // 地图点的颜色
                    color: "#ffa022"
                  }
                },
                animation: true,
                zlevel: 2
              }
            ]
          }]
        };
        this.myChart.setOption(this.optionXyMap01);
        this.myChart.off("click");
        // this.myChart.on('click', this.clickArea);//点击事件
      }
    }
  };
</script>

<style scoped lang="scss">
    .echartBox {
        #map {
            height: 1000px;
            width: 100%;
            /*background-color: #26404b;*/
        }
    }
</style>
