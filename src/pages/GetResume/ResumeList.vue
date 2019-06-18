<template>
  <div class="content">
    <md-dialog :md-active.sync="showProjDialog">
      <div
              class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <RecommandProj></RecommandProj>
      </div>

      <md-dialog-actions>
        <md-button  class="md-info"  @click="showProjDialog = false">关闭</md-button>
        <md-button  class="md-success"  @click="showProjDialog = false">推荐</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="editResumeDialog">
      <Scroll>
        <edit-profile-form data-background-color="blue"></edit-profile-form>
      </Scroll>

      <md-dialog-actions>
        <md-button  class="md-info"  @click="editResumeDialog = false">关闭</md-button>
        <md-button  class="md-success"  @click="editResumeDialog = false">新增</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-card>
      <md-card-header data-background-color="blue">
        <h4 class="title" style="display: inline-block" >简历列表</h4>
        <md-button class="md-round md-info" data-background-color="blue" style="float:right;width: 20px;height: 35px"  @click="editResumeDialog = true">新增简历</md-button>
      </md-card-header>
      <md-card-content>

          <div class="md-autocomplete" style="margin:0px;height:110px;display:inline-block;">
            <div class="md-layout md-gutter md-small-size-100 md-size-50" style="margin-left: 20px">
                  <div class="md-layout-item md-size-40">
                    <md-autocomplete
                            class="search"
                            v-model="selectedUser"
                            :md-options="searchUsers"
                    >
                      <label>Search...</label>
                    </md-autocomplete>
                  </div>
                  <div class="md-layout-item md-size-40">
                    <md-field>
                      <md-select>
                        <md-option v-for="tfield in tablefield" :value="tfield.value" class="md-layout-item" >{{ tfield.field }}</md-option>
                      </md-select>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-10">
                    <md-button class="md-round md-info" data-background-color="blue" >查询</md-button>
                  </div>
                </div>
          </div>
          <md-button class="md-round md-info" data-background-color="blue" style="float:right;font-size: medium;font-weight: bold;"  @click="showProjDialog = true">推荐项目</md-button>
          <ResumeListComponent upordown="下载"></ResumeListComponent>

      </md-card-content>
    </md-card>
        <!--<ScannableTable>
          <template slot="resumebutton">
            <md-button class="md-round md-info" data-background-color="blue" style="float:right;left: 150px;font-size: medium;font-weight: bold"  @click="editResumeDialog = true">新增简历</md-button>
          </template>
          <template slot="projbutton">
            <md-button class="md-round md-info" data-background-color="blue" style="float:right;width: 20px;height: 35px"  @click="showProjDialog = true">推荐项目</md-button>
          </template>
        </ScannableTable>-->

        <!--<SplitTest></SplitTest>-->
    <Upload action="#">
      <md-button class="md-round md-info" data-background-color="blue" icon="ios-cloud-upload-outline">上传简历</md-button>
    </Upload>
  </div>
</template>

<script>
    import { SimpleTable, OrderedTable } from "@/components";
    import ResumeListComponent from "./ResumeListComponent";
    import EditProfileForm from "./EditProfileForm";
    import RecommandProj from "./RecommandProj";
    import ScannableTable from "./SpannableTable"

    export default {
        components: {
            ScannableTable,
            RecommandProj,
            EditProfileForm,
            ResumeListComponent,
            OrderedTable,
            SimpleTable
        },
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                editResumeDialog:false,
                showProjDialog : false,
                selectedUser:null,
                searchUsers:[
                    "小健",
                    "苏菲",
                    "peter",
                    "木鱼",
                    "Arron",
                    "李非凡"
                ],
                tablefield:[
                    {
                        field:"姓名",
                        value:"name"
                    },
                    {
                        field:"基本信息",
                        value:"basic"
                    },
                    {
                        field:"项目",
                        value:"project"
                    },
                    {
                        field:"状态",
                        value:"state"
                    },
                    {
                        field:"时间",
                        value:"time"
                    },
                ],
                selected: [],
                selected1:[],
                addprojects: [
                    {
                        pnum:"T-ss-001",
                        pname:"xx1银行项目组",
                        preser:"张三"

                    },
                    {
                        pnum:"T-ss-002",
                        pname:"xx2项目组",
                        preser:"李四"
                    },
                    {
                        pnum:"T-ss-003",
                        pname:"xx3银行项目组",
                        preser:"王五"
                    },
                    {
                        pnum:"T-ss-004",
                        pname:"xx4银行项目组",
                        preser:"卢六"
                    }
                ],
            };
        },
        methods: {
            onSelect (items) {
                console.log("onSelect")
                this.selected = items
            },
            onSelect1 (items) {
                console.log("onSelect1")
                this.selected1 = items
                console.log(items.length)
            }
        }

    };
</script>
