<template>
    <div class="echartBox">
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
        </el-row>

    </div>
</template>

<script>
  import GuangDongMap from "./components/GuangDongMap";
  import ChinaMap from "./components/chinaMap";
  import ChinaMapTwo from "./components/chinaMapTwo";

  export default {
    components: {
      ChinaMap,
      GuangDongMap,
      ChinaMapTwo
    }
  };
</script>
