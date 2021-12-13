<template>
    <div ref="echart" id="map" ></div>
</template>

<script>
  import * as echarts from "echarts";
  import China from "@/utils/map/json/china";
  import GuangDong from "@/utils/map/json/province/guangdong";
  import HuNan from "@/utils/map/json/province/hunan";
  import HuBei from "@/utils/map/json/province/hubei";
  import GuangXi from "@/utils/map/json/province/guangxi";
  import AnHui from "@/utils/map/json/province/anhui";
  import AoMen from "@/utils/map/json/province/aomen";
  import BeiJing from "@/utils/map/json/province/beijing";
  import ChongQing from "@/utils/map/json/province/chongqing";
  import FuJian from "@/utils/map/json/province/fujian";
  import GanSu from "@/utils/map/json/province/gansu";
  import GuiZhou from "@/utils/map/json/province/guizhou";
  import HaiNan from "@/utils/map/json/province/hainan";
  import JiangSu from "@/utils/map/json/province/jiangsu";
  import JiangXi from "@/utils/map/json/province/jiangxi";
  import JiLin from "@/utils/map/json/province/jilin";
  import LiaoNing from "@/utils/map/json/province/liaoning";
  import ShanDong from "@/utils/map/json/province/shandong";
  import ShangHai from "@/utils/map/json/province/shanghai";
  import ShanXi from "@/utils/map/json/province/shanxi";
  import SiChuan from "@/utils/map/json/province/sichuan";
  import ZheJiang from "@/utils/map/json/province/zhejiang";
  import YunNan from "@/utils/map/json/province/yunnan";

  export default {
    data() {
      return {
        myChart: null,
        selectName: "中国"
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
        switch (this.selectName) {
          case "中国":
            echarts.registerMap("中国", China);
            break;
          case "广东":
            echarts.registerMap("广东", GuangDong);
            break;
          case "湖南":
            echarts.registerMap("湖南", HuNan);
            break;
          case "湖北":
            echarts.registerMap("湖北", HuBei);
            break;
          case "广西":
            echarts.registerMap("广西", GuangXi);
            break;
          case "安徽":
            echarts.registerMap("安徽", AnHui);
            break;
          case "澳门":
            echarts.registerMap("澳门", AoMen);
            break;
          case "北京":
            echarts.registerMap("北京", BeiJing);
            break;
          case "重庆":
            echarts.registerMap("重庆", ChongQing);
            break;
          case "福建":
            echarts.registerMap("福建", FuJian);
            break;
          case "甘肃":
            echarts.registerMap("甘肃", GanSu);
            break;
          case "贵州":
            echarts.registerMap("贵州", GuiZhou);
            break;
          case "海南":
            echarts.registerMap("海南", HaiNan);
            break;
          case "江苏":
            echarts.registerMap("江苏", JiangSu);
            break;
          case "江西":
            echarts.registerMap("江西", JiangXi);
            break;
          case "吉林":
            echarts.registerMap("吉林", JiLin);
            break;
          case "辽宁":
            echarts.registerMap("辽宁", LiaoNing);
            break;
          case "山东":
            echarts.registerMap("山东", ShanDong);
            break;
          case "上海":
            echarts.registerMap("上海", ShangHai);
            break;
          case "山西":
            echarts.registerMap("山西", ShanXi);
            break;
          case "四川":
            echarts.registerMap("四川", SiChuan);
            break;
          case "浙江":
            echarts.registerMap("浙江", ZheJiang);
            break;
          case "云南":
            echarts.registerMap("云南", YunNan);
            break;
        }
        // echarts.registerMap("china", China);
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
              show: false,
              trigger: "item", // hover触发器
              confine: true,
              formatter: (e) => {
              }
            },
            geo: {
              show: true,
              map: this.selectName,
              roam: true, //是否允许缩放
              zoom: 1,
              itemStyle: {//设置区域样式
                normal: {
                  borderColor: "#646a70",
                  borderWidth: 1,
                  // 地区的颜色
                  areaColor: {
                    type: "radial",
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                      offset: 0,
                      color: "rgba(147, 235, 248, 0)" // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: "rgba(147, 235, 248, .2)" // 100% 处的颜色
                    }],
                    globalCoord: false
                  },
                  shadowColor: "#00bc9d",//地图边框颜色
                  shadowOffsetX: -1,
                  shadowOffsetY: 1,
                  shadowBlur: 1
                }
                // emphasis:{//可以在里面设置，也可以在外面设置
                //   scale: true,
                //   areaColor: "#00bc9d",
                //   focus:'self',//series,self
                //   borderWidth: 0,
                // }
              },
              emphasis: {//设置鼠标经过区域时的样式
                focus: "self",
                label: {
                  color: "#fff"
                },
                itemStyle: {
                  areaColor: "#00bc9d",
                  borderWidth: 0
                }
              }
            }
          },
          options: [{
            series: [
              //地图点的动画效果
              {
                type: "effectScatter",
                coordinateSystem: "geo",
                data: [
                  {
                    name: "广州",
                    value: [113.280637, 23.125178, 90]//前面是坐标，后面是值,
                  }, {
                    name: "广西",
                    value: [108.320004, 22.82402, 190]
                  }
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
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    // 地图散点的颜色
                    color: "#ffa022"
                  }
                },
                emphasis: {//设置散点的样式
                  label: {
                    color: "#fff"
                  },
                  itemStyle: {//设置经过散点的样式
                    color: "#f56c6c"
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
        this.myChart.on("click", this.clickArea);//点击事件
      },
      clickArea(params) {
        this.selectName = params.name;
        console.log(222222222);
        console.log(params);
        this.drawMap();
      }
    }
  };
</script>

<style scoped lang="scss">
    .echartBox {
        #map {
            height: 600px;
            width: 100%;
            background-color: #26404b;
        }
    }
</style>
