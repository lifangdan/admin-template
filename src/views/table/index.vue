<template>
    <div>我是表格页面</div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    created() {
      console.log('我是表格：11111111111');
      console.log(this.userInfo);
    }
  };
</script>

<style scoped>

</style>
