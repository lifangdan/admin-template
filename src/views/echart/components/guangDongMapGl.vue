<template>
  <div ref="echart" id="map"></div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
import GuangDong from "@/utils/map/json/province/guangdong";
import GuangZhou from '@/utils/map/json/city/guangzhou'
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
      const data = [
        { name: '广州市', value: 6200 },
        { name: '深圳市', value: 4000 },
        { name: '珠海市', value: 3000 },
        { name: '东莞市', value: 4300 },
        { name: '惠州市', value: 2300 },
        { name: '佛山市', value: 2000 },
        { name: '韶关市', value: 2100 },
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
        visualMap: {
          show: true,
          type: 'piecewise',//piecewise,continuous
          left: '5%',
          top: '5%',
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
        geo3D: {
          type: "map3D", // 系列类型
          map: "广东", // 地图类型。
          label: {
            // 标签的相关设置
            show: false,
            textStyle: {
              // 标签的字体样式
              color: "#6882b0", // 地图初始化区域字体颜色
              fontSize: 13, // 字体大小
              // backgroundColor: "rgba(0,23,11,1)", // 字体背景色
            },
          },
          itemStyle: {
            color: "#1c57e6", // 地图板块的颜色
            borderWidth: 1,
            borderColor: "#112f94",
          },
          regionHeight: -2,

          emphasis: {
            // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时 label和itemStyle 的样式)
            label: {
              show: false,
            },
            itemStyle: {
              color: "#ffdf18", // 高亮时地图板块颜色改变
              borderWidth: 0,
            },
          },
          viewControl: {
            projection: "orthographic", // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
            rotateSensitivity: 1, //默认为1, 设置为0后无法旋转。 rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。
            zoomSensitivity: 0, // 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。
            panSensitivity: 1, // 平移操作
            orthographicSize: 65,
            alpha: 30, // 视角绕 x 轴，即上下旋转的角度。[ default: 40 ]
            beta: -20, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
            // center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
          },
          zlevel: 1,
        },
        series: [
          {
            type: "map3D", // 系列类型
            map: "广东", // 地图类型。
            data:data,
            label: {
              show: true,
              textStyle: {
                // 标签的字体样式
                color: "#6882b0", // 地图初始化区域字体颜色
                fontSize: 13, // 字体大小
                // backgroundColor: "rgba(0,23,11,1)", // 字体背景色
              },
            },
            itemStyle: {
              color: "#040b5c", // 地图板块的颜色
              borderWidth: 1, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域 [ default: 0 ]
              borderColor: "#112f94", // 图形描边的颜色。[ default: #333 ]
            },
            regionHeight: 0,

            emphasis: {
              // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时 label和itemStyle 的样式)
              label: {
                show: true,
                textStyle: {
                  color: "#fff", // 高亮时标签颜色变为 白色
                },
              },
              itemStyle: {
                color: "#ffdf18", // 高亮时地图板块颜色改变
                borderWidth:0
              },
            },
            // regions: [
            //   {
            //     // 可对单个地图区域进行设置
            //     name: "广州市", // 所对应的地图区域的名称
            //     //regionHeight: '', // 区域的高度，可以设置不同的高度用来表达数据的大小。当 GeoJSON 为建筑的数据时，也可以通过这个值表示简直的高度。
            //     itemStyle: {
            //       // 单个区域的样式设置
            //       color: "#00FF00",
            //       opacity: 1,
            //       borderWidth: 0.4,
            //       borderColor: "#5F9EA0",
            //     },
            //   },
            // ],
            viewControl: {
              // 用于鼠标的旋转，缩放等视角控制。
              projection: "orthographic", // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
              rotateSensitivity: 1, // 默认为1, 设置为0后无法旋转。 rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。
              zoomSensitivity: 0, // 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。
              panSensitivity: 1, // 平移操作
              orthographicSize: 65,
              alpha: 30, // 视角绕 x 轴，即上下旋转的角度。[ default: 40 ]
              beta: -20, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
              // center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
            },
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
#map {
  height: 720px;
  width: 100%;
}
</style>
