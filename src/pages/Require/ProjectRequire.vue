<template>
    <div class="content">
        <md-dialog :md-active.sync="showProjDialog" style="z-index: 5">
            <div
                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
            >
                <form>
                    <scroll>
                    <md-card>
                        <md-card-header :data-background-color="dataBackgroundColor" data-background-color="blue">
                            <h4 class="title">需求新增页面</h4>
                        </md-card-header>

                        <md-card-content>
                            <div class="md-layout md-gutter md-small-size-100 md-size-50" >

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

                                <div class="md-layout-item">
                                    <md-field>
                                        <label for="state">状态</label>
                                        <md-select v-model="state" name="state" id="state">
                                            <md-option value="fight-club">常规</md-option>
                                            <md-option value="godfather">紧急</md-option>
                                        </md-select>
                                    </md-field>
                                </div>

                                <div class="md-layout-item md-small-size-100 md-size-50">
                                    <md-field>
                                        <label>需求数量</label>
                                        <md-input v-model="DemandQuantity" type="text"></md-input>
                                    </md-field>
                                </div>

                                <div class="md-layout-item md-small-size-100 md-size-50">
                                    <md-field>
                                        <label>描述</label>
                                        <md-textarea v-model="desc" type="text" ></md-textarea>
                                    </md-field>
                                </div>
                            </div>
                        </md-card-content>
                    </md-card>
                    </scroll>
                </form>
            </div>
            <md-dialog-actions>
                <md-button class="md-round md-info" data-background-color="blue" @click="showProjDialog = false">关闭
                </md-button>
                <md-button class="md-round md-success" data-background-color="blue" @click="showProjDialog = false">发布
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
                        <md-button class="md-round md-info" style="float: right;width: 20px;height: 35px"
                                   @click="showProjDialog = true">发布需求
                        </md-button>
                        <h4 class="title">需求列表页面</h4>
                    </md-card-header>
                    <md-card-content>
                        <prj-req table-header-color="blue"></prj-req>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
    import {ProjectRequireList} from "@/components";

    export default {
        name: "edit-profile-form",
        components: {
            "prj-req": ProjectRequireList
        },
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            },
            dataBackgroundColor: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                showProjDialog: false,
                addprojects: null,
                username: null,
                disabled: null,
                emailadress: null,
                lastname: null,
                firstname: null,
                address: null,
                city: null,
                country: null,
                code: null,
                project: null,
                type: null,
                level: null,
                DemandQuantity: null,
                state:null,
                desc:null,
                aboutme:
                    "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
            }
        },
        methods:{
            gotolink()
            {
                this.$router.replace('/projectRequire')
            }
        },
    };
</script>
<style>

</style>
