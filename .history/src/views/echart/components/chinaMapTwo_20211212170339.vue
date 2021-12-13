<template>
  <div ref="echart" id="map"></div>
</template>

<script>
import * as echarts from "echarts";
import geoJson from "@/utils/map/map.json";
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
      echarts.registerMap("china", geoJson);

      function randomData() {
        return Math.round(Math.random() * 500);
      }

      const data = [
        { name: "北京", value: randomData() },
        { name: "天津", value: randomData() },
        { name: "上海", value: randomData() },
        { name: "重庆", value: randomData() },
        { name: "河北", value: randomData() },
        { name: "河南", value: randomData() },
        { name: "云南", value: randomData() },
        { name: "辽宁", value: randomData() },
        { name: "黑龙江", value: randomData() },
        { name: "湖南", value: randomData() },
        { name: "安徽", value: randomData() },
        { name: "山东", value: randomData() },
        { name: "新疆", value: randomData() },
        { name: "江苏", value: randomData() },
        { name: "浙江", value: randomData() },
        { name: "江西", value: randomData() },
        { name: "湖北", value: randomData() },
        { name: "广西", value: randomData() },
        { name: "甘肃", value: randomData() },
        { name: "山西", value: randomData() },
        { name: "内蒙古", value: randomData() },
        { name: "陕西", value: randomData() },
        { name: "吉林", value: randomData() },
        { name: "福建", value: randomData() },
        { name: "贵州", value: randomData() },
        { name: "广东", value: randomData() },
        { name: "青海", value: randomData() },
        { name: "西藏", value: randomData() },
        { name: "四川", value: randomData() },
        { name: "宁夏", value: randomData() },
        { name: "海南", value: randomData() },
        { name: "台湾", value: randomData() },
        { name: "香港", value: randomData() },
        { name: "澳门", value: randomData() },
        { name: "南海诸岛", value: 0 },
      ];
      const option = {
        // backgroundColor: '#FFFFFF',//地图背景颜色
        // title: {//标题
        //   text: '全国地图',
        //   subtext: '纯属虚构',
        //   x:'center'
        // },
        tooltip: {
          trigger: "item",
        },
        visualMap: {
          show: true,
          type: "piecewise", //piecewise,continuous
          x: "left",
          y: "bottom",
          splitList: [
            { start: 500, end: 600 },
            { start: 400, end: 500 },
            { start: 300, end: 400 },
            { start: 200, end: 300 },
            { start: 100, end: 200 },
            { start: 0, end: 100 },
          ],
          color: ["#f56c6c", "#e6a23c", "#409eff", "#67c23a"],
          textStyle: {
            color: "#fff",
          },
        },

        series: [
          {
            name: "随机数据",
            type: "map",
            map: "china",
            roam: true,
            data: data,
            label: {
              show: true,
              formatter: "{b}\n{c}",
              color: "#fff",
            },
            itemStyle: {
              normal: {
                borderColor: "#646a70", //'rgb(213, 214, 79)',//地图边框颜色
                borderWidth: 1,
                // 地区的颜色
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false,
                },
                // shadowColor: "#00bc9d",//地图边框阴影颜色
                shadowColor: "rgb(213, 214, 79)", //地图边框阴影颜色
                shadowOffsetX: -1,
                shadowOffsetY: 1,
                shadowBlur: 1,
              },
              emphasis: {
                areaColor: "rgb(213, 214, 79)", //鼠标经过时区域的颜色
                borderWidth: 0,
              },
            },
          },
        ],
      };
      this.myChart.setOption(option);
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
