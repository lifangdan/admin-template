<template>
    <div>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item :class="{'isInline':item.isInline}"
                          v-for="(item, index) in list"
                          :prop="item.field"
                          :key="index">
                <template slot="label">
                      <span>
                        {{item.label}}
                      </span>
                </template>
                <!--输入框-->
                <el-input v-if="item.type==='input'||!item.type"
                          v-model="form[item.field]"
                          :clearable="item.clearable||true"
                          :disabled="item.disabled||disabled"
                          :style="{width:item.width||'400px'}"></el-input>
                <!--下拉框-->
                <el-select v-if="item.type==='select'"
                           v-model="form[item.field]"
                           :clearable="item.clearable||true"
                           :multiple="item.multiple||false"
                           :disabled="item.disabled||disabled"
                           :style="{width:item.width||'400px'}"
                           placeholder="请选择">
                    <el-option v-for="i in item.list||[]"
                               :key="i.value"
                               :label="i.label"
                               :value="i.value">
                    </el-option>
                </el-select>
                <!--单选框-->
                <el-radio-group v-if="item.type==='radio'"
                                v-model="form[item.field]"
                                :disabled="item.disabled||disabled">
                    <el-radio v-for="i in item.list||[]"
                              :key="i.value"
                              :label="i.value">
                        {{i.label}}
                    </el-radio>
                </el-radio-group>
            </el-form-item>
            <!--提交按钮-->
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    components: {},
    props: {
      /*
      * formList，表格参数
      * field：必传，字段名；
      * label：必传，名称；
      * type：表单类型，默认是输入框；输入框-input,下拉选择框-select，单选框-radio；
      * initVal：初始值,可是String、Number、Array、Boolean类型，初始值类型根据type来决定；
      * disabled:表单组件是否禁用；
      * clearable：是否显示清除按钮,默认显示；
      * list：下拉框、单选框等数据列表；
      * multiple：下拉框等是否是多选,默认单选；
      * rules：表单校验规则；
      * isSlot：是否是插槽；
      * */
      formList: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        disabled: false,
        form: {},
        rules: {},
        list: []
      };
    },
    watch: {
      formList: {
        deep: true,
        immediate: true,//必传
        handler(val) {
          console.log(1111111);
          console.log(val);
          const data = window.utils.deepClone(val);
          this.list = data;
          data.forEach((item, index) => {
            //设置表单值
            if (item.initVal) {
              console.log("aaaaaa");
              console.log(item.field);
              this.$set(this.form, item.field, item.initVal);
            } else {
              this.$set(this.form, item.field, "");
              console.log("bbbbbbbb");
              console.log(item.field);
            }
            //设置校验
            this.$set(this.rules, item.field, item.rules || []);
          });

        }
      }
    },
    methods: {
      submitForm(formName) {
        console.log("提交了1111111");
        console.log(this.form);
        this.$refs[formName].validate((valid) => {
          if (valid) {
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>

<style scoped>

</style>
