<template>
    <div>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item :class="{'isInline':item.isInline}"
                          v-for="(item, index) in list"
                          v-if="visible[item.field]"
                          :prop="item.field"
                          :key="index">
                <template slot="label">
                    <span>{{item.label}}</span>
                </template>
                <!--输入框-->
                <el-input v-if="item.type==='input'"
                          v-model="form[item.field]"
                          :clearable="item.clearable||true"
                          :disabled="disable[item.field]||item.disabled||disabled"
                          :style="{width:item.width||'400px'}"></el-input>
                <!--文本域-->
                <el-input v-if="item.type==='textarea'"
                          v-model="form[item.field]"
                          :clearable="item.clearable||true"
                          :disabled="disable[item.field]||item.disabled||disabled"
                          type="textarea"
                          :autosize="{ minRows: item.minRows||2, maxRows: item.maxRows||4}"
                          :style="{width:item.width||'400px'}"></el-input>
                <!--下拉框-->
                <el-select v-if="item.type==='select'"
                           v-model="form[item.field]"
                           :clearable="item.clearable||true"
                           :multiple="item.multiple||false"
                           :disabled="disable[item.field]||item.disabled||disabled"
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
                                :disabled="disable[item.field]||item.disabled||disabled">
                    <el-radio v-for="i in item.list||[]"
                              :key="i.value"
                              :label="i.value">
                        {{i.label}}
                    </el-radio>
                </el-radio-group>
                <!--多选框-->
                <el-checkbox-group v-if="item.type==='check'"
                                   v-model="form[item.field]"
                                   :disabled="disable[item.field]||item.disabled||disabled">
                    <el-checkbox v-for="i in item.list||[]"
                                 :key="i.value"
                                 :label="i.value">
                        {{i.label}}
                    </el-checkbox>
                </el-checkbox-group>
                <!--插槽-->
                <slot v-if="item.isSlot"
                      :row="item"
                      :form="form"
                      :name="item.field">
                </slot>
            </el-form-item>

            <!--按钮-->
            <el-form-item v-if="isButton">
                <el-button @click="groupBtnFn('ruleForm',item,item.handler)"
                           v-for="(item,index) in groupBtn"
                           :key="index"
                           size="mini"
                           :type="item.type">
                    {{item.label}}
                </el-button>
                <!--<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
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
      * type：表单类型，输入框-input,下拉选择框-select，单选框-radio；
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
      },
      isButton: {//是否显示按钮
        type: Boolean,
        default: true
      },
      ruleForm: Object,
      groupBtn: {
        type: Array,
        default: function() {
          return [
            {
              type: "primary",
              label: "提交"
            }
          ];

        }
      }
    },
    data() {
      return {
        disabled: false,
        form: {},
        rules: {},
        list: [],
        visible: {},
        disable: {}
      };
    },
    watch: {
      formList: {
        deep: true,
        immediate: true,//必传
        handler(val) {
          console.log(1111111);
          console.log(val);
          if (!val || val.length < 1) {
            return false;
          }
          this.rules = {};
          this.form = {};
          const data = window.utils.deepClone(val);
          this.list = data;
          data.forEach((item, index) => {
            //设置表单值
            if (item.initVal) {
              this.$set(this.form, item.field, item.initVal);
            } else {
              this.$set(this.form, item.field, "");
            }
            //设置校验规则
            this.$set(this.rules, item.field, item.rules || []);

            //设置是否可见、可读
            this.$set(this.visible, item.field, true);
            this.$set(this.disable, item.field, false);
          });
        }
      },
      ruleForm: {
        deep: true,
        immediate: true,
        handler(val) {
          console.log(222222222);
          console.log(val);
          if (val) {
            this.form = val;
          }
        }
      }
    },
    created() {

    },
    methods: {
      groupBtnFn(formName, item, callback) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (callback) {
              callback && callback(item,this.$refs[formName]);
            } else {
              this.$emit("formData", Object.assign({}, this.form));
            }
          } else {
            this.$emit("formData", null);
            console.log("error submit!!");
            return false;
          }
        });

      },
      submitForm(formName) {
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }

    }
  };
</script>

<style scoped>

</style>
