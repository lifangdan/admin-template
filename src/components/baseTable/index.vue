<template>
    <div>
        <el-table
            :data="data"
            :border="border"
            stripe
            style="width: 100%">
            <el-table-column
                v-if="isShowIndex"
                label="序号"
                width="60"
                align="center"
                type="index"
                :index="indexMethod"/>
            <el-table-column v-for="(item, index) in tableProps"
                             :key="index"
                             :prop="item.field"
                             :label="item.label"
                             :sortable="item.sortable"
                             :sort-method="item.sortMethod || null"
                             :width="item.width || null"
                             :min-width="item.minWidth || null"
                             :header-align="item.headerAlign||'center'"
                             :align="item.align||'center'">
                <template slot-scope="scope">
                    <slot :name="item.field"
                          v-if="item.isSlot"
                          :item="item"
                          :$index="scope.$index"
                          :row="scope.row"></slot>
                    <span
                        v-else>{{item.filter? item.filter(scope.row[item.field],scope.row):scope.row[item.field]}}</span>
                </template>
            </el-table-column>
        </el-table>
        <Pagination
            v-if="total>pageSize&&isShowPageination"
            :currentPage="currentPage"
            :pageSize="pageSize"
            :total="total"
            @updateCurrentPage="updateCurrentPage"/>
    </div>
</template>

<script>
  import Pagination from "./components/pagination";

  export default {
    components: {
      Pagination
    },
    props: {
      /*
      * tableProps，表格参数
      * field：字段名；
      * label：名称；
      * isSlot：是否是插槽；
      * */
      tableProps: {
        type: Array,
        required: true
      },
      tableData: {//表格数据
        type: Array
      },
      requestURL: {//接口请求的地址
        default: null
      },
      formData: {//接口请求的参数设置,不请求接口时要设置分页也可以传该参数
        type: Object,
        default: function() {
          return {
            pageParam: {
              count: 10,
              offSet: 0,
              pageOffSet: 0,
              start: 1
            }
          };
        }
      },
      border: {//判断表格是否是带边框表格,默认有边框
        type: Boolean,
        default: true
      },
      isShowPageination: {//是否展示分页，默认展示,
        type: Boolean,
        default: true
      },
      isRemote: {//是否需要请求接口,需要则必传requestURL参数，默认需要
        type: Boolean,
        default: true
      },
      isShowIndex: {//是否显示序号，默认不显示
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        data: [],
        allData: [],
        currentPage: 1,
        pageSize: 10,
        total: 0,
        form: null
      };
    },
    watch: {
      tableData: {
        deep: true,
        immediate: true,//必传
        handler(val) {
          if (val && !this.isRemote) {
            this.allData = val;
            this.total = val.length;
          }
        }
      },
      formData: {
        immediate: true,//必传
        deep: true,//必传
        handler(val) {
          this.form = window.utils.deepClone(val);
          this.currentPage = this.form.pageParam.start || 1;
          this.pageSize = this.form.pageParam.count || 10;
          this.getData();
        }
      }
    },
    created() {

    },
    methods: {
      getData() {
        if (this.isRemote) {
          this.$http[this.requestURL](this.form)
            .then(res => {
              this.data = res.data;
              this.total = res.page.total;
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          if (this.isShowPageination) {
            this.data = this.allData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage) * this.pageSize);
          } else {//不设置分页则一页显示全部数据
            this.data = this.allData;
          }

        }

      },
      updateCurrentPage(val) {
        this.form.pageParam.start = val;
        this.currentPage = val;
        this.getData();
      },
      indexMethod(index) {
        return this.pageSize * (this.currentPage - 1) + index + 1;
      }
    }

  };
</script>

<style scoped>

</style>
