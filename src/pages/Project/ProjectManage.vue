<template>
  <div class="content">
    <md-dialog :md-active.sync="showProjDialog" style="z-index: 5">
      <div
              class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <form>
          <md-card >
            <md-card-header :data-background-color="dataBackgroundColor" data-background-color="blue">
              <h4 class="title">项目新增页面</h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter md-small-size-100 md-size-50">

                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>项目名</label>
                    <md-input v-model="projectName" type="text"></md-input>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>描述</label>
                    <md-input v-model="desc" type="text"></md-input>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label for="principal">项目负责人</label>
                    <md-select v-model="principal" name="principal" id="principal">
                      <md-option value="fight-club">张三</md-option>
                      <md-option value="godfather">李四</md-option>
                    </md-select>
                  </md-field>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </form>
    </div>
        <md-dialog-actions>
          <md-button class="md-round md-info" data-background-color="blue" @click="showProjDialog = false">关闭
          </md-button>
          <md-button class="md-round md-success" data-background-color="blue" @click="showProjDialog = false">新增
            <!--@click="gotolink"-->
          </md-button>
        </md-dialog-actions>
    </md-dialog>


      <div class="md-layout">
        <div
                class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
        <md-card>
          <md-card-header data-background-color="blue">
            <md-button class="md-round md-info" data-background-color="blue" style="float:right;width: 20px;height: 35px" @click="showProjDialog = true">新增项目</md-button>
            <h4 class="title">项目列表</h4>
          </md-card-header>
          <md-card-content>
            <prj-list table-header-color="blue"></prj-list>
          </md-card-content>
        </md-card>
      </div>
      </div>
    </div>
</template>

<script>
    import { ProjectManageList } from "@/components";

    export default {
        name: "edit-profile-form",
        props: {
            dataBackgroundColor: {
                type: String,
                default: "",
            }
        },
        components: {
            "prj-list":ProjectManageList
        },
        data() {
            return {
                showProjDialog:false,
                principal: null,
                projectName:"",
                desc:"",
                aboutme:
                    "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
            };
        },
        methods:{
            gotolink()
            {
                this.$router.replace('/projectManage')
            }
        },
    };
</script>
