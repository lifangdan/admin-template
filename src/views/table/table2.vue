<template>
    <div>
        <Table
            :tableData="data"
            :tableProps="tableProps"
            :isRemote="false"
            :isShowIndex="true">
            <template slot="date" slot-scope="scope">
                <span class="blueColor">{{scope.row.date}}</span>
            </template>
            <template slot="custom" slot-scope="scope">
                <el-button
                    type="primary"
                    @click="handleView(scope.row)">查看
                </el-button>
                <el-button
                    type="success"
                    @click="handleEdit(scope.$index, scope.row)">编辑
                </el-button>
                <el-button
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除
                </el-button>
            </template>
        </Table>
    </div>
</template>
<script>
  import Table from "@/components/baseTable";

  export default {
    components: {
      Table
    },
    data() {
      return {
        data: [
          {
            date: "2021-09-01",
            name: "姓名1",
            num:1,
            address: "荔湾区"
          },
          {
            date: "2021-09-02",
            name: "姓名2",
            num:2,
            address: "荔湾区"
          },
          {
            date: "2021-09-03",
            name: "姓名3",
            num:3,
            address: "荔湾区"
          },
          {
            date: "2021-09-04",
            name: "姓名4",
            num:4,
            address: "荔湾区"
          },
          {
            date: "2021-09-04",
            name: "姓名4",
            num:4,
            address: "荔湾区"
          },
          {
            date: "2021-09-04",
            name: "姓名4",
            num:4,
            address: "荔湾区"
          },
          {
            date: "2021-09-04",
            name: "姓名4",
            num:4,
            address: "荔湾区"
          },
          {
            date: "2021-09-04",
            name: "姓名4",
            num:4,
            address: "荔湾区"
          },
          {
            date: "2021-09-04",
            name: "姓名4",
            num:4,
            address: "荔湾区"
          },
          {
            date: "2021-09-04",
            name: "姓名4",
            num:4,
            address: "荔湾区"
          },
        ],
        tableProps: [
          {
            field: "date",
            label: "日期",
            isSlot: true
          },
          {
            field: "name",
            label: "名字"
          },
          {
            field: "num",
            label: "数量"
          },
          {
            field: "address",
            label: "地址"
          },
          {
            field: "custom",
            label: "操作",
            width: "300px",
            isSlot: true
          }
        ],
      };
    },

    created() {
    },
    methods: {
      handleView(row) {
        console.log(row);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  };
</script>

<style scoped>

</style>
