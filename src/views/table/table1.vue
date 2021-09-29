<template>
    <div>
        <Table
            :tableProps="tableProps"
            :formData="formData"
            requestURL="workOrderAuditAttachment"
            >
            <template slot="auditTime" slot-scope="scope">
                <span class="blueColor">{{scope.row.auditTime}}</span>
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
  import { mapGetters } from "vuex";

  export default {
    components: {
      Table
    },
    data() {
      return {
        data: [],
        tableProps: [
          {
            field: "auditTime",
            label: "日期",
            isSlot: true
          },
          {
            field: "auditCompanyName",
            label: "名字"
          },
          {
            field: "auditOpinion",
            label: "意见"
          },
          {
            field: "auditUserName",
            label: "审核人"
          },
          {
            field: "auditRoleName",
            label: "审核角色"
          },
          {
            field: "custom",
            label: "操作",
            width:"300px",
            isSlot: true,
          }
        ],
        formData:{
          jobNumber: "CQDJ_404071541157",
          pageParam: { count: 10, start: 1, offSet: 0 }
        }
      };
    },
    computed: {
      ...mapGetters(["userInfo"])
    },
    created() {
      console.log("获取用户登录信息");
      console.log(this.userInfo);
    },
    methods: {
      workOrderAuditAttachment() {
        this.$http.workOrderAuditAttachment({
          jobNumber: "CQDJ_404071541157",
          pageParam: { count: 10, start: 0, offSet: 0 }
        })
          .then(res => {
            this.data = res.data;
          })
          .catch((err) => {
            console.error(err);
          });
      },
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
