<template>
    <div class="echartBox">
        <el-row :gutter="20">
            <el-col :span="12">
                <h4>3D地图</h4>
                <GuangDongMapTwo/>
            </el-col>
            <el-col :span="12">
                <h4>广东地图</h4>
                <GuangDongMapTwo/>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <h4>全国地图</h4>
                <ChinaMap/>
            </el-col>
            <el-col :span="12">
                <h4>广东地图</h4>
                <GuangDongMap/>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <h4>全国地图</h4>
                <ChinaMapTwo/>
            </el-col>
            <el-col :span="12">
                <h4>饼图</h4>
                <Pie/>
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
  import Pie from "./components/pie";

  export default {
    components: {
      ChinaMap,
      GuangDongMapTwo,
      GuangDongMap,
      ChinaMapTwo,
      Pie,
      GuangDongMapGl
    }
  };
</script>
