<template>
  <div ref="echart" id="pie" style="width: 100%; height: 600px"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      myChart: null,
      timer: null,
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
      this.myChart = echarts.init(this.$refs.echart);
      const option = {
        tooltip: {
          show: true,
          trigger: "item",
          textStyle: {
            color: "#fff",
          },
          borderWidth: 0,
          backgroundColor: "rgba(50,50,50,0.7)",
          formatter: function (a) {
            if (a.seriesName == "pie1") {
              let strHtml =
                "<div>" +
                "<div>" +
                a.name +
                "：" +
                a.value +
                " （" +
                a.percent +
                "%）</div>" +
                "<div>省属：</div>" +
                "<div>地市：</div>" +
                "</div>";
              return strHtml;
            }
          },
        },
        title: {
          text: "累计户数",
          subtext: "186",
          textAlign: 'center',
          left: '44.5%',
          top: '46%',
          textStyle: {
            color: '#5a7097',
            fontSize: 13
          },
          subtextStyle: {
            color: '#387dfe',
            fontSize: 24,
            fontWeight: 'bold'
          }
        },
        legend: {
          orient: 'vertical',
          right: '7%',
          top: '35%',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: '#4e719a'
          },
          data: ["省内", "省外", "境外"],
        },
        series: [
          {
            name: 'pie1',//内圆
            type: 'pie',
            center: ['45%', '50%'],//饼图的中心
            radius: [46, 71],
            label: {
              show: false
            },
            color: ['#387dfe', '#15dbe7', '#5864c5'],
            itemStyle: {
              borderWidth: 2,
              borderColor: '#080b26'
            },
            data: [
              { value: 100, name: "省内" },
              { value: 100, name: "省外" },
              { value: 100, name: "港澳台" },
              { value: 100, name: "境外" },
            ],
          },
          {
            name: 'pie2',//外圆
            type: 'pie',
            center: ['45%', '50%'],//饼图的中心
            radius: [72, 105],
            label: {
              show: false
            },
            color: ['#6198fe', '#0f62fe', '#38e3ed', '#12b8c2', '#7680d0', '#3f4cb5'],
            itemStyle: {
              borderWidth: 2,
              borderColor: '#080b26'
            },
            data: [
              { value: 50, name: "省属" },
              { value: 50, name: "地市" },
              { value: 50, name: "B二级1" },
              { value: 50, name: "B二级2" },
              { value: 50, name: "C二级1" },
              { value: 50, name: "C二级2" },
              { value: 50, name: "D二级1" },
              { value: 50, name: "D二级2" },
            ],
          },
        ],
      };
      this.myChart.setOption(option);
      let _this = this;
      let index = 0; //播放所在下标
      //定时播放tooltip
      function setTooltip() {
        const dataLen = option.series[0].data.length;
        //取消外圆和内圆高亮
        if (index == 0) {
          _this.myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 1,
            dataIndex: [0, 1],
          });
        } else if (index == 1) {
          _this.myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 1,
            dataIndex: [2, 3],
          });
        } else if (index == 2) {
          _this.myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 1,
            dataIndex: [4, 5],
          });
        } else if (index == 3) {
          _this.myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 1,
            dataIndex: [6, 7],
          });
        }
        _this.myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: index,
        });
        //设置外圆和内圆高亮
        index = (index + 1) % dataLen;
        _this.myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: index,
        });
        if (index == 0) {
          _this.myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 1,
            dataIndex: [0, 1],
          });
        } else if (index == 1) {
          _this.myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 1,
            dataIndex: [2, 3],
          });
        } else if (index == 2) {
          _this.myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 1,
            dataIndex: [4, 5],
          });
        } else if (index == 3) {
          _this.myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 1,
            dataIndex: [6, 7],
          });
        }
        //设置播放tooltip
        _this.myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: index,
        });
      }
      this.timer = setInterval(setTooltip, 2000);
      this.myChart.on("mouseover", { seriesIndex: 0 }, function (params) {
        window.clearInterval(_this.timer);
      });
      this.myChart.on("mouseout", { seriesIndex: 0 }, function (params) {
        this.timer = setInterval(setTooltip, 2000);
      });
    },
  },
};
</script>

<style scoped>
</style>
