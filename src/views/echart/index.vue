<template>
  <div class="echartBox">
    <el-row :gutter="20">
      <el-col :span="24" >
        <h4>3D地图-广州</h4>
        <GuangZhou class="bg"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24" >
        <h4>3D地图</h4>
        <GuangDongMapGl class="bg"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" >
        <h4>雷达图</h4>
        <Radar class="bg"/>
      </el-col>
      <el-col :span="12">
        <h4>广东地图</h4>
        <GuangDongMapTwo class="bg"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <h4>全国地图</h4>
        <ChinaMap class="bg"/>
      </el-col>
      <el-col :span="12">
        <h4>广东地图</h4>
        <GuangDongMap class="bg"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <h4>全国地图</h4>
        <ChinaMapTwo class="bg"/>
      </el-col>
      <el-col :span="12">
        <h4>饼图</h4>
        <Pie class="bg"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GuangDongMap from "./components/GuangDongMap";
import GuangDongMapTwo from "./components/GuangDongMapTwo";
import ChinaMap from "./components/chinaMap";
import ChinaMapTwo from "./components/chinaMapTwo";
import GuangDongMapGl from "./components/guangDongMapGl";
import GuangZhou from "./components/guangzhou";
import Pie from "./components/pie";
import Radar from "./components/radar";

export default {
  components: {
    ChinaMap,
    GuangDongMapTwo,
    GuangDongMap,
    ChinaMapTwo,
    Pie,
    GuangDongMapGl,
    Radar,
    GuangZhou,
  },
};
</script>
<style scoped lang="scss">
.bg {
  background-color: #26404b;
}
</style>
