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
      this.aa();
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
            map: "广东",
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
    aa() {
      if (this.myChart) {
        this.myChart.dispose();
      }
      this.myChart = echarts.init(this.$refs.echart);
      echarts.registerMap("广东", GuangDong);
      const option = {
        tooltip: {
          // 提示框
          trigger: "item",
          formatter: function (params) {
            return params.name;
          },
        },

        series: [
          {
            type: "map3D", // 系列类型
            name: "map3D", // 系列名称
            map: "广东", // 地图类型。
            label: {
              // 标签的相关设置
              show: true,
              textStyle: {
                // 标签的字体样式
                color: "#fff", // 地图初始化区域字体颜色
                fontSize: 13, // 字体大小
                opacity: 1, // 字体透明度
                // backgroundColor: "rgba(0,23,11,0)", // 字体背景色
              },
            },
            itemStyle: {
              // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
              color: "#010553", // 地图板块的颜色
              opacity: 1, // 图形的不透明度 [ default: 1 ]
              borderWidth: 1, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域 [ default: 0 ]
              borderColor: "#021778", // 图形描边的颜色。[ default: #333 ]
            },
            regionHeight: 2,

            emphasis: {
              // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时 label和itemStyle 的样式)
              label: {
                // label高亮时的配置
                show: true,
                textStyle: {
                  color: "#fff", // 高亮时标签颜色变为 白色
                  fontSize: 15, // 高亮时标签字体 变大
                },
              },
              itemStyle: {
                // itemStyle高亮时的配置
                color: "#ffdf18", // 高亮时地图板块颜色改变
                borderWidth: 0,
              },
            },
            regions: [
              {
                // 可对单个地图区域进行设置
                name: "广州市", // 所对应的地图区域的名称
                //regionHeight: '', // 区域的高度，可以设置不同的高度用来表达数据的大小。当 GeoJSON 为建筑的数据时，也可以通过这个值表示简直的高度。
                itemStyle: {
                  // 单个区域的样式设置
                  color: "#00FF00",
                  opacity: 1,
                  borderWidth: 0.4,
                  borderColor: "#5F9EA0",
                },
              },
              {
                name: "深圳市",
                itemStyle: {
                  color: "#EEEE00",
                  opacity: 1,
                  borderWidth: 0.4,
                  borderColor: "#5F9EA0",
                },
              },
            ],
            viewControl: {
              // 用于鼠标的旋转，缩放等视角控制。
              projection: "orthographic", // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
              rotateSensitivity: 1, // 旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。默认为1, 设置为0后无法旋转。 rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。
              zoomSensitivity: 0, // 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。
              panSensitivity: 1, // 平移操作
              alpha: 25, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
              beta: -20, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
              // center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
            },

            data: [
              {
                // 可对单个地图区域进行设置
                name: "广州市", // 所对应的地图区域的名称
                //regionHeight: '', // 区域的高度，可以设置不同的高度用来表达数据的大小。当 GeoJSON 为建筑的数据时，也可以通过这个值表示简直的高度。
                itemStyle: {
                  // 单个区域的样式设置
                  color: "#00FF00",
                  opacity: 1,
                  borderWidth: 0.4,
                  borderColor: "#5F9EA0",
                },
              },
              {
                name: "深圳市",
                itemStyle: {
                  color: "#EEEE00",
                  opacity: 1,
                  borderWidth: 0.4,
                  borderColor: "#5F9EA0",
                },
              },
            ],
          },
        ],
      };
      this.myChart.setOption(option);
    },
  },
};
</script>

<style scoped lang="scss">
#map {
  height: 600px;
  width: 100%;
  /*background-color: #26404b;*/
}
</style>
