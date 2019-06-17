<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <!--<notifications></notifications>-->

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>主页</p>
      </sidebar-link>
      <sidebar-link to="/resume">
        <md-icon>person</md-icon>
        <p>简历管理</p>
      </sidebar-link>
      <sidebar-link to="/projectRequire">
        <md-icon>content_paste</md-icon>
        <p>需求管理</p>
      </sidebar-link>
      <sidebar-link to="/projectManage">
        <md-icon>library_books</md-icon>
        <p>项目管理</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>用户权限管理</p>
      </sidebar-link>
      <sidebar-link to="/role">
        <md-icon>date_range</md-icon>
        <p>角色用户关联</p>
      </sidebar-link>
      <sidebar-link to="/operation">
        <md-icon>edit</md-icon>
        <p>操作记录查看</p>
      </sidebar-link>
    </side-bar>


    <div class="main-panel">


      <dashboard-content> </dashboard-content>


    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    MobileMenu
  }
};
</script>
