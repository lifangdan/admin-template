<template>
  <div ref="echart" id="map"></div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
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
      const option = {
        series: [
          {
            type: "map3D", // 系列类型
            map: "GuangDong",
            data: [
              //   {
              //   name: "广州",
              //   value: [113.280637, 23.125178, 90]//前面是坐标，后面是值,
              // }
            ],
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
    /*background-color: #26404b;*/
  }
}
</style>
