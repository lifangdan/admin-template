<template>
    <div class="pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="pageSize1"
            layout="total, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
  export default {
    components: {},
    props: {
      total: {
        type: Number
      },
      currentPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        currentPage1: 1,
        pageSize1: 10
      };
    },
    watch: {
      // currentPage: {
      //   immediate: true,
      //   handler(val) {
      //     this.currentPage1 = val;
      //   }
      // },
      // pageSize: {
      //   immediate: true,
      //   handler(val) {
      //     this.pageSize1 = val;
      //   }
      // }
    },
    computed: {},
    created() {
      console.log(4555444);
      this.currentPage1 = this.currentPage;
      this.pageSize1 = this.pageSize;
    },
    mounted() {
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage1 = val;
        this.$emit("updateCurrentPage", val);
        console.log(`当前页: ${val}`);
      }
    }

  };
</script>
<style lang="scss" scoped>
    .pagination {
        text-align: right;
        margin: 15px 0;
    }
</style>
