<template>
    <div>我是首页</div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { getCookie, } from '@/utils/auth';

  export default {
    name: 'home',
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    created() {
      console.log("获取用户登录信息");
      console.log(this.userInfo);
      console.log(getCookie('token'));
    }
  };
</script>

<style scoped>

</style>
