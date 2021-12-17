<template>
  <div ref="echart" id="map"></div>
</template>

<script>
import * as echarts from "echarts";
import GuangDong from "@/utils/map/json/province/guangdong";
import China from "@/utils/map/json/china";
import GuiZhou from "@/utils/map/json/province/guizhou";

export default {
  data() {
    return {
      myChart: null,
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
          show: false,
        },
        baseOption: {
          animation: true,
          animationDuration: 1000,
          animationEasing: "cubicInOut",
          animationDurationUpdate: 1000,
          animationEasingUpdate: "cubicInOut",
          tooltip: {
            show: false,
            trigger: "item", // hover触发器
            confine: true,
            formatter: (e) => {},
          },
          geo: [
            {
              show: true,
              map: "广东",
              roam: true, //是否允许缩放
              zoom: 1,
              label: {
                emphasis: {
                  show: false,
                },
              },
              itemStyle: {
                normal: {
                  borderColor: "#021778",
                  borderWidth: 1,
                  // 地区的颜色
                  areaColor: "#010553",
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
                  show: false,
                  areaColor: "#ffdf18", //鼠标经过时区域的颜色
                  borderWidth: 0,
                },
              },
              regions: [
                {
                  name: "广州市",
                  itemStyle: {
                    // borderWidth: 5,
                    // areaColor:'#ffdf18',
                    // borderColor:'#2d6cff',
                    // shadowColor: 'rgba(255, 221, 25, 0.5)',
                    // shadowBlur: 10
                  },
                },
              ],
            },
          ],
        },
        options: [
          {
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
                rippleEffect: {
                  //波纹绘制方式
                  brushType: "stroke",
                },
                hoverAnimation: true,
                label: {
                  normal: {
                    formatter: "{b}",
                    position: "right",
                    show: false, // 是否显示公司名称
                  },
                },
                itemStyle: {
                  normal: {
                    // 地图点的颜色
                    color: "#ffa022",
                  },
                },
                animation: true,
                zlevel: 2,
              },
            ],
          },
        ],
      };
      this.myChart.setOption(this.optionXyMap01);
      this.myChart.off("click");
      // this.myChart.on('click', this.clickArea);//点击事件
    },
    drawMap2() {
      const data = [
        { name: '广州市', value: 6200 },
        { name: '深圳市', value: 4000 },
        { name: '珠海市', value: 3000 },
        { name: '东莞市', value: 4300 },
        { name: '惠州市', value: 2300 },
        { name: '佛山市', value: 2000 },
        { name: '韶关市', value: 21000 },
        { name: '清远市', value: 3100 },
        { name: '湛江市', value: 2000 },
        { name: '茂名市', value: 3100 },
        { name: '阳江市', value: 1100 },
        { name: '云浮市', value: 1200 },
        { name: '江门市', value: 4100 },
        { name: '中山市', value: 1700 },
        { name: '肇庆市', value: 300 },
        { name: '河源市', value: 1300 },
        { name: '梅州市', value: 1600 },
        { name: '揭阳市', value: 1800 },
        { name: '汕头市', value: 1800 },
        { name: '汕尾市', value: 2800 },
        { name: '潮州市', value: 3800 }
      ]
      if (this.myChart) {
        this.myChart.dispose()
      }
      this.myChart = echarts.init(this.$refs.echart)
      echarts.registerMap('广东', GuangDong)
      this.option = {
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          show: true,
          type: 'piecewise',//piecewise,continuous
          left: '5%',
          top: 0,
          itemWidth: 10,
          itemHeight: 10,
          pieces: [
            { gt: 5000, label: '5000以上' }, { min: 4000, max: 5000 },
            { min: 3000, max: 4000 }, { min: 2000, max: 3000 },
            { min: 1000, max: 2000 }, { min: 0, max: 1000 }
          ],
          color: ['#224dba', '#1d41a9', '#173597', '#122987', '#0c1d75', '#040b5c'],
          textStyle: {
            color: '#5a7097',
            fontSize: 13
          },
          padding: [15, 20],
          backgroundColor: 'rgba(0,0,0,0.2)'
        },
        geo: {
          map: '广东',
          // aspectScale: 0.75, //长宽比
          zoom: 1.2,
          roam: false,
          // data: data,
          label: {
            color: '#6882b0',
            fontSize: 13,
            show: true // 是否显示城市名称
          },
          itemStyle: {
            borderColor: '#112f94',//"#082082",
            borderWidth: 1,
            // 地区的颜色
            areaColor: '#040b5c',//'#010553',
            shadowColor: '#1b57e7',//地图边框阴影颜色
            shadowBlur:5,
            shadowOffsetX: 5,
            shadowOffsetY: 10,
            emphasis: {
              show: false,
              areaColor: '#fdde16',//鼠标经过时区域的颜色
              borderWidth: 0
            }
          }
          // itemStyle: {
          //   normal: {
          //     areaColor: "#013C62",
          //     shadowColor:"#01273F",
          //     shadowOffsetX:0,
          //     shadowOffsetY:25
          //   },
          //   emphasis: {
          //     label:{
          //       show:false
          //     }
          //   }
          // }
        },
        series: [
          {
            type: 'map',
            map: '广东',
            data: data,
            zoom: 1.2,
            geoIndex: 1,
            // aspectScale: 0.75, //长宽比
            roam: false,
            label: {
              color: '#6882b0',
              fontSize: 13,
              show: true // 是否显示城市名称
            },
            itemStyle: {
              borderColor: '#112f94',//"#021778",
              borderWidth: 1,
              // 地区的颜色
              areaColor: '#040b5c',//'#010553',
              emphasis: {
                show: false,
                areaColor: '#fdde16',//鼠标经过时区域的颜色
                borderWidth: 0
              }
            }
          }
        ]
        // series: [
        //   {
        //     type: 'map3D',
        //     map: '广东',
        //     name:'广东',
        //     // boxDepth: 100, //地图倾斜度
        //     // regionHeight: 2, //地图厚度
        //     data: data,
        //     roam: false,
        //     top:0,
        //     right:0,
        //     label: {
        //       textStyle:{
        //         color: '#6882b0',
        //         fontSize: 13,
        //         borderWidth:0
        //       },
        //       show: true, // 是否显示城市名称
        //       formatter: function(params) {
        //         console.log(11111111)
        //         console.log(params)
        //         return params.marker
        //       }
        //     },
        //     itemStyle: {
        //       borderColor: '#082082',//"#021778",
        //       borderWidth: 1,
        //       // 地区的颜色
        //       color: '#040b5c',
        //       // areaColor: {
        //       //   type: "radial",
        //       //   x: 0.5,
        //       //   y: 0.5,
        //       //   r: 0.8,
        //       //   colorStops: [{
        //       //     offset: 0,
        //       //     color: "rgba(147, 235, 248, 0)" // 0% 处的颜色
        //       //   }, {
        //       //     offset: 1,
        //       //     color: "rgba(147, 235, 248, .2)" // 100% 处的颜色
        //       //   }],
        //       //   globalCoord: false // 缺省为 false
        //       // },
        //       // shadowColor: "#00bc9d",//地图边框颜色
        //       // shadowOffsetX: -1,
        //       // shadowOffsetY: 1,
        //       // shadowBlur: 1
        //     },
        //     emphasis: {
        //       itemStyle:{
        //         color:'#fdde16',
        //         opacity:0.6
        //       },
        //       borderWidth:0
        //     },
        //     viewControl:{
        //       projection:'orthographic',
        //       rotateSensitivity: 0,//禁止鼠标拖动
        //       zoomSensitivity:0,//禁止缩放
        //       orthographicSize: 70, //控制地图大小，值越小图越大
        //       alpha:30,
        //       beta:-10
        //     }
        //   }
        // ]

      }
      this.myChart.setOption(this.option)
      // this.myChart.off('click')
      // this.myChart.on('click', this.clickArea);//点击事件
    },
  },
};
</script>

<style scoped lang="scss">
.echartBox {
  #map {
    height: 600px;
    width: 100%;
  }
}
</style>
