<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            mode="vertical"
            :show-timeout="200"
            :default-active="$route.path"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff">
            <SideBarItem :routes="routerList"/>
        </el-menu>
    </div>
</template>

<script>
  import bus from '@/components/bus';
  import SideBarItem from './sideBarItem';

  export default {
    components: {
      SideBarItem,
    },
    data() {
      return {
        collapse: false,
        items: [
          {
            icon: 'el-icon-s-home',
            index: 'home',
            title: '系统首页12'
          },
          {
            icon: 'el-icon-s-grid',
            index: 'table',
            title: '表格'
          },
          {
            icon: 'el-icon-s-grid',
            index: '3',
            title: '表单相关',
            subs: [
              {
                index: 'form',
                title: '基本表单'
              },
              {
                index: '3-2',
                title: '三级菜单',
                subs: [
                  {
                    index: 'editor',
                    title: '富文本编辑器'
                  },
                  {
                    index: 'markdown',
                    title: 'markdown编辑器'
                  }
                ]
              },
              {
                index: 'upload',
                title: '文件上传'
              }
            ]
          },
        ],
        routerList: []
      };
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    },
    mounted() {
      this.routerList = this.$router.options.routes || [];
    },
    created() {
      // 通过 Event Bus 进行组件间通信，来折叠侧边栏
      bus.$on('collapse', msg => {
        this.collapse = msg;
        bus.$emit('collapse-content', msg);
      });
    },
    methods: {
      hasOneShowingChildren(children) {
        const showingChildren = children.filter(item => {
          return !item.hidden;
        });
        if (showingChildren.length === 1) {
          return true;
        }
        return false;
      }
    }
  };
</script>

<style >
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .sidebar > ul {
        height: 100%;
    }

    /*隐藏文字*/
    .el-menu--collapse .el-submenu__title span {
        display: none;
    }

    /*隐藏 > */
    .el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
        display: none;
    }
</style>
