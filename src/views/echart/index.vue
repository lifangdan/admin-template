<template>
    <div class="echartBox">
        <el-row :gutter="20">
            <el-col :span="12">
                <h4>地图</h4>
                <MapEcharts/>
            </el-col>
            <el-col :span="12">
            </el-col>
        </el-row>

    </div>
</template>

<script>
  import MapEcharts from "./components/map";
  export default {
    components: {
      MapEcharts
    }
  };
</script>
