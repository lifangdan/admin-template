<template>
    <div>
        <h4>有初始值</h4>
        <BaseForm ref="baseform1"
                  :formList="formList"
                  :ruleForm="form1"
                  :groupBtn="groupBtn1"
                  @formData="setFormData1">
            <template slot="slotCheck" slot-scope="scope">
                <el-checkbox-group v-model="scope.form.slotCheck">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    <el-checkbox label="复选框 B"></el-checkbox>
                    <el-checkbox label="复选框 C"></el-checkbox>
                </el-checkbox-group>
            </template>
        </BaseForm>

        <h4>无初始值</h4>
        <BaseForm ref="baseform2"
                  :formList="formList"
                  :ruleForm="form2"
                  @formData="setFormData2">
            <template slot="slotCheck" slot-scope="scope">
                <el-checkbox-group v-model="scope.form.slotCheck">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    <el-checkbox label="复选框 B"></el-checkbox>
                    <el-checkbox label="复选框 C"></el-checkbox>
                </el-checkbox-group>
            </template>
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
            initVal: "测试项目",
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
              required: true, message: "请输入", trigger: "blur"
            }]
          }
        ],
        form1: {
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
        form2: null,
        groupBtn1: [
          {
            type: 'primary',
            btnType:'edit',
            label: '编辑',
            handler: this.edit
          }
        ],
      };
    },
    created() {
      this.$nextTick(() => {
        if (this.form1.radio === 1) {
          this.$refs.baseform1.visible.check2 = false;
          this.$refs.baseform1.disable.check1 = true;
          // this.$set(this.formList[6],'visible',true)
        } else {
          this.$refs.baseform1.visible.check2 = true;
          this.$refs.baseform1.disable.check1 = false;
          // this.$set(this.formList[6],'visible',false)
        }
      });
    },
    watch: {
      form1: {
        deep: true,
        handler(val) {
          console.log("dddddddddddddddddd");
          if (val.radio === 1) {
            this.$refs.baseform1.visible.check2 = false;
            this.$refs.baseform1.disable.check1 = true;
          } else {
            this.$refs.baseform1.visible.check2 = true;
            this.$refs.baseform1.disable.check1 = false;
          }
        }
      }
    },
    methods: {
      setFormData1(val) {
        if (val) {
          console.log("bbbbbbbbbb");
          console.log(this.form1);
          this.submit();
        }
      },
      setFormData2(val) {
        if (val) {
          console.log("ccccccccccc");
          console.log(this.form1);
          this.submit();
        }
      },
      submit() {
        this.$message.success("提交成功");
      },
      edit(item){
        console.log(88888888888)
        console.log(item)
        this.groupBtn1=[
          {
            type: 'primary',
            btnType:'submit',
            label: '提交',
          },
          {
            type: '',
            btnType:'cancel',
            label: '取消',
            handler: this.cancel
          }
        ]
      },
      cancel(){
        this.groupBtn1=[
          {
            type: 'primary',
            btnType:'edit',
            label: '编辑',
            handler: this.edit
          }
        ]
      },
      getFormData(){
        console.log('eeeeeeeeeeeeeeeee')
      }

    }
  };
</script>
