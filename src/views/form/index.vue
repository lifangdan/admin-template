<template>
    <div>
        <h4>1、无初始值</h4>
        <BaseForm ref="baseform1"
                  :formList="formList"
                  @formChange="formChange"
                  @formData="getFormData1">
            <template slot="slotCheck" slot-scope="scope">
                <el-checkbox-group v-model="scope.form.slotCheck">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    <el-checkbox label="复选框 B"></el-checkbox>
                    <el-checkbox label="复选框 C"></el-checkbox>
                </el-checkbox-group>
            </template>
        </BaseForm>

        <h4>2、有初始值</h4>
        <BaseForm ref="baseform2"
                  :formList="formList"
                  :ruleForm="form2"
                  @formChange="formChange"
                  @formData="getFormData2">
            <template slot="slotCheck" slot-scope="scope">
                <el-checkbox-group v-model="scope.form.slotCheck">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    <el-checkbox label="复选框 B"></el-checkbox>
                    <el-checkbox label="复选框 C"></el-checkbox>
                </el-checkbox-group>
            </template>
        </BaseForm>

        <h4>3、自定义按钮</h4>
        <BaseForm ref="baseform3"
                  :formList="formList"
                  :groupBtn="groupBtn3"
                  :disabled="disabled3">
            <template slot="slotCheck" slot-scope="scope">
                <el-checkbox-group v-model="scope.form.slotCheck">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    <el-checkbox label="复选框 B"></el-checkbox>
                    <el-checkbox label="复选框 C"></el-checkbox>
                </el-checkbox-group>
            </template>
        </BaseForm>

        <h4>4、表单查询条件</h4>
        <BaseForm ref="baseform4"
                  :formList="formList4"
                  :groupBtn="groupBtn4"
                  :inline="true">
        </BaseForm>
    </div>
</template>
<script>
  import BaseForm from "@/components/baseForm";

  export default {
    components: {
      BaseForm
    },
    data() {
      return {
        formList: [
          {
            field: "name",
            label: "活动名称",
            type: "input",
            initVal: "",
            rules: [{
              required: true, message: "请填写此项", trigger: "blur"
            }]
          },
          {
            field: "disabled",
            label: "禁用表单",
            type: "input",
            initVal: "测试项目",
            disabled: true,//设置禁用
            rules: [{
              required: true, message: "请填写此项", trigger: "blur"
            }]
          },
          {
            field: "select1",
            label: "下拉框单选",
            type: "select",
            initVal: "",
            list: [
              {
                value: 1,
                label: "区域一"
              },
              {
                value: 2,
                label: "区域一"
              }
            ],
            rules: [{
              required: true, message: "请选择", trigger: "change"
            }]
          },
          {
            field: "select2",
            label: "下拉框多选",
            type: "select",
            initVal: "",
            multiple: true,
            list: [
              {
                value: 1,
                label: "区域一"
              },
              {
                value: 2,
                label: "区域一"
              }
            ]
          },
          {
            field: "date",
            label: "日期",
            type: "date",
            initVal: null,
            rules: [{
              required: true, message: "请选择", trigger: "change"
            }]
          },
          {
            field: "dateRange",
            label: "日期范围",
            type: "date",
            isRange: true,
            initVal: null,
            rules: [{
              required: true, message: "请选择", trigger: "change"
            }]
          },
          {
            field: "radio",
            label: "单选框",
            type: "radio",
            initVal: null,
            list: [
              {
                label: "是",
                value: 1
              }, {
                label: "否",
                value: 0
              }
            ],
            rules: [{
              required: true, message: "请选择", trigger: "change"
            }]
          },
          {
            field: "check1",
            label: "多选框1",
            type: "check",
            initVal: [],
            list: [
              {
                label: "复选框 A",
                value: 1
              }, {
                label: "复选框 B",
                value: 2
              }, {
                label: "复选框 C",
                value: 3
              }
            ],
            rules: [{
              required: true, message: "请选择", trigger: "change"
            }]
          },
          {
            field: "check2",
            label: "多选框2",
            type: "check",
            initVal: [],
            list: [
              {
                label: "复选框 A",
                value: 1
              }, {
                label: "复选框 B",
                value: 2
              }, {
                label: "复选框 C",
                value: 3
              }
            ],
            rules: [{
              required: true, message: "请选择", trigger: "change"
            }]
          },
          {
            field: "slotCheck",
            label: "我是插槽",
            isSlot: true,//是插槽则必传
            initVal: [],
            rules: [{
              required: true, message: "请选择", trigger: "change"
            }]
          },
          {
            field: "textarea",
            label: "文本域",
            type: "textarea",
            initVal: null,
            minRows: 4,//设置文本域最小行数
            maxRows: 8,//设置文本域最大行数
            rules: [{
              required: true, message: "请输入", trigger: "change"
            }]
          }
        ],
        formList4: [
          {
            field: "name",
            label: "名称",
            type: "input",
            initVal: "",
            width: "auto"
          },
          {
            field: "type",
            label: "类型",
            type: "input",
            initVal: "",
            width: "auto"
          },
          {
            field: "date",
            label: "时间",
            type: "input",
            initVal: "",
            width: "auto"
          }
        ],
        form1: null,
        form2: {
          name: "测试项目",
          disabled: "测试禁用",
          select1: 1,
          select2: [1],
          radio: 1,
          check1: [1],
          check2: [1, 2],
          slotCheck: ["复选框 C"],
          textarea: "test"
        },
        form3: null,
        form4: null,
        groupBtn3: [
          {
            type: "primary",
            btnType: "edit",
            label: "编辑",
            handler: this.handleClick
          }
        ],
        groupBtn4: [
          {
            type: "primary",
            btnType: "query",
            label: "查询",
            handler: this.handleSearch
          }
        ],
        disabled3: true
      };
    },
    created() {
      this.$nextTick(() => {
        if (this.form2.radio === 1) {
          this.$refs.baseform2.visible.check2 = false;
          this.$refs.baseform2.disable.check1 = true;
        } else {
          this.$refs.baseform2.visible.check2 = true;
          this.$refs.baseform2.disable.check1 = false;
        }
      });
    },
    watch: {

    },
    methods: {
      getFormData1(val) {
        if (val) {
          console.log("提交的表单1的值：");
          console.log(val);
          console.log(this.form1);
          this.submit();
        }
      },
      getFormData2(val) {
        if (val) {
          console.log("提交的表单2的值：");
          console.log(val);
          console.log(this.form2);
          this.submit();
        }
      },
      formChange(val) {
        console.log("cccccccccccccc");
        if (val.radio === 1) {
          this.$refs.baseform1.visible.check2 = false;

          this.$refs.baseform2.visible.check2 = false;
          this.$refs.baseform2.disable.check1 = true;
        } else {
          this.$refs.baseform1.visible.check2 = true;

          this.$refs.baseform2.visible.check2 = true;
          this.$refs.baseform2.disable.check1 = false;
        }
      },
      submit() {
        this.$message.success("提交成功");
      },
      handleClick(item,val) {
        if (item.btnType === "edit") {
          this.disabled3 = false;
          this.groupBtn3 = [
            {
              type: "primary",
              btnType: "submit",
              label: "提交",
              handler: this.handleClick
            },
            {
              type: "",
              btnType: "cancel",
              label: "取消",
              handler: this.handleClick
            }
          ];
        } else if (item.btnType === "cancel") {
          this.disabled3 = true;
          this.groupBtn3 = [
            {
              type: "primary",
              btnType: "edit",
              label: "编辑",
              handler: this.handleClick
            }
          ];
        } else if (item.btnType === "submit") {
          this.disabled3 = true;
          this.groupBtn3 = [
            {
              type: "primary",
              btnType: "edit",
              label: "编辑",
              handler: this.handleClick
            }
          ];
          console.log("提交的表单3的值：");
          console.log(val);
          console.log(this.form3);
          this.submit();
        }
      },
      handleSearch(item,val) {
        console.log("点击搜索了~");
        console.log(val);
      }
    }
  };
</script>
