<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">需求新增页面</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter md-small-size-100 md-size-50">

          <div class="md-layout-item">
            <md-field>
              <label for="project">项目</label>
              <md-select v-model="project" name="project" id="project">
                <md-option value="fight-club">项目1</md-option>
                <md-option value="godfather">项目2</md-option>
                <md-option value="godfather-ii">项目3</md-option>
                <md-option value="godfather-iii">项目4</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item">
            <md-field>
              <label for="type">类型</label>
              <md-select v-model="type" name="type" id="type">
                <md-option value="fight-club">功能测试</md-option>
                <md-option value="godfather">性能测试</md-option>
                <md-option value="godfather-ii">技术支持</md-option>
                <md-option value="godfather-iii">安全性测试</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item">
            <md-field>
              <label for="level">人员级别</label>
              <md-select v-model="level" name="level" id="level">
                <md-option value="fight-club">初级</md-option>
                <md-option value="godfather">中级</md-option>
                <md-option value="godfather-ii">高级</md-option>
                <md-option value="godfather-iii">资深</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>需求数量</label>
              <md-input v-model="DemandQuantity" type="text"></md-input>
            </md-field>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>

</template>
<script>
    export default {
        name: "edit-profile-form",
        props: {
            dataBackgroundColor: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                username: null,
                disabled: null,
                emailadress: null,
                lastname: null,
                firstname: null,
                address: null,
                city: null,
                country: null,
                code: null,
                aboutme:
                    "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
            };
        },
    };
</script>
<style>

</style>
