<template>
    <div>
        <BaseForm :formList="formList"></BaseForm>
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
            disabled: true,
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
          }
        ],
        ruleForm: {
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: ""
        },
        rules: {
          name: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          region: [
            { required: true, message: "请选择活动区域", trigger: "change" }
          ],
          date1: [
            { type: "date", required: true, message: "请选择日期", trigger: "change" }
          ],
          date2: [
            { type: "date", required: true, message: "请选择时间", trigger: "change" }
          ],
          type: [
            { type: "array", required: true, message: "请至少选择一个活动性质", trigger: "change" }
          ],
          resource: [
            { required: true, message: "请选择活动资源", trigger: "change" }
          ],
          desc: [
            { required: true, message: "请填写活动形式", trigger: "blur" }
          ]
        }
      };
    },
    methods: {
    }
  };
</script>
