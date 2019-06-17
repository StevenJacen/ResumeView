<template>
    <md-card>
        <md-card-header data-background-color="blue">
            <h4 class="title" style="display: inline-block" >简历列表</h4>
            <slot name="projbutton"></slot>
        </md-card-header>
        <md-card-content>
            <md-table table-header-color="blue" @md-selected="onSelect1" v-model="users" >
                <md-table-toolbar>
                    <div class="md-autocomplete">
                        <md-card>
                            <md-card-content>
                                <div class="md-layout md-gutter md-small-size-100 md-size-50">
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
                            </md-card-content>
                        </md-card>
                    </div>
                    <slot name="resumebutton"></slot>
                </md-table-toolbar>

                <thead>
                    <tr>
                        <th :rowspan=2 class="md-table-head">
                            <div class="md-table-head-label">姓名</div>
                        </th>
                        <th :colspan=5 class="md-table-head">
                            <div class="md-table-head-label">基本信息</div>
                        </th>
                        <th :colspan=3 class="md-table-head">
                            <div class="md-table-head-label">项目信息</div>
                        </th>
                    </tr>
                    <tr>
                        <th class="md-table-head">
                            <div class="md-table-head-label">性别</div>
                        </th>
                        <th class="md-table-head">
                            <div class="md-table-head-label">学历</div>
                        </th>
                        <th class="md-table-head">
                            <div class="md-table-head-label">生日</div>
                        </th>
                        <th class="md-table-head">
                            <div class="md-table-head-label">薪资</div>
                        </th>
                        <th class="md-table-head">
                            <div class="md-table-head-label">手机</div>
                        </th>
                        <th class="md-table-head">
                            <div class="md-table-head-label">项目名</div>
                        </th>
                        <th class="md-table-head">
                            <div class="md-table-head-label">状态</div>
                        </th>
                        <th class="md-table-head">
                            <div class="md-table-head-label">面试时间</div>
                        </th>
                    </tr>
                </thead>

                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select >
                    <md-table-cell md-label="姓名" ><router-link to="/user">{{ item.name }}</router-link></md-table-cell>
                    <md-table-cell md-label="性别" >
                        <table>
                            <tr  v-for="i in item.basicMessage" >
                                <td>{{i.sex}}</td>
                            </tr>
                        </table>
                    </md-table-cell>
                    <md-table-cell md-label="学历" >
                        <table>
                            <tr  v-for="i in item.basicMessage" >
                                <td>{{i.education}}</td>
                            </tr>
                        </table>
                    </md-table-cell>
                    <md-table-cell md-label="生日" >
                        <table>
                            <tr  v-for="i in item.basicMessage" >
                                <td>{{i.birth}}</td>
                            </tr>
                        </table>
                    </md-table-cell>
                    <md-table-cell md-label="薪资" >
                        <table>
                            <tr  v-for="i in item.basicMessage" >
                                <td>{{i.salary}}</td>
                            </tr>
                        </table>
                    </md-table-cell>
                    <md-table-cell md-label="手机" >
                        <table>
                            <tr  v-for="i in item.basicMessage" >
                                <td>{{i.phone}}</td>
                            </tr>
                        </table>
                    </md-table-cell>
                    <md-table-cell md-label="项目" >
                        <table>
                            <tr  v-for="i in item.basicMessage" >
                                <td>{{i.project}}</td>
                            </tr>
                        </table>
                    </md-table-cell>
                    <md-table-cell md-label="状态" >
                        <table>
                            <tr  v-for="i in item.basicMessage" >
                                <td>{{i.status}}</td>
                            </tr>
                        </table>
                    </md-table-cell>
                    <md-table-cell md-label="时间" >
                        <table>
                            <tr  v-for="i in item.basicMessage" >
                                <td>{{i.date}}</td>
                            </tr>
                        </table>
                    </md-table-cell>
                    <md-table-cell  md-label="简历下载"><md-button class="md-round md-info" data-background-color="blue" >下载</md-button></md-table-cell>
                </md-table-row>

            </md-table>
        </md-card-content>
    </md-card>
</template>

<script>
    export default {
        name: "SpannableTable",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
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
                users: [
                    {
                        name:"小健",
                        basicMessage:[
                            {sex:"男",education:"本科",birth:"1994-2-2",salary:"8000",city:"北京",phone:"17293829931", email:"xiaojian@xx.com",project:"", status:"待推荐",date:"2019-3-1"}
                        ]
                    },
                    {
                        name:"苏菲",
                        basicMessage:[
                            {sex:"女",education:"本科",birth:"1991-4-2",salary:"120000",city:"上海",phone:"12323455632", email:"suf@zx.com",project:"xx2银行项目组",status:"待面试",date:"2019-5-13"}
                        ]
                    },
                    {
                        name:"peter",
                        basicMessage:[
                            {sex:"男",education:"本科",birth:"1991-4-2",salary:"9999",city:"上海",phone:"18218281283", email:"ppap@11.com",project:"xx3银行项目组",status:"不合适",date:"2019-4-15"},
                            {sex:"男",education:"本科",birth:"1991-4-2",salary:"9999",city:"上海",phone:"18218281283", email:"ppap@11.com",project:"xx1银行项目组",status:"不合适",date:"2019-4-16"},
                            {sex:"男",education:"本科",birth:"1991-4-2",salary:"9999",city:"上海",phone:"18218281283", email:"ppap@11.com",project:"xx2银行项目组",status:"不合适",date:"2019-4-17"}
                        ]
                    },
                    {
                        name:"木鱼",
                        basicMessage:[
                            {sex:"男",education:"本科",birth:"1985-3-2",salary:"150000",city:"北京",phone:"19338382755", email:"ark-tv@xx.com",project:"xx1银行项目组",status:"入职",date:"2019-3-27"}
                        ]
                    },
                    {
                        name:"Arron",
                        basicMessage:[
                            {sex:"男",education:"本科",birth:"1990-12-2",salary:"8000",city:"北京",phone:"安徽", email:"aa@qc.com",project:"", status:"没兴趣",date:"2019-3-2"}
                        ]
                    },
                    {
                        name:"李非凡",
                        basicMessage:[
                            {sex:"男",education:"本科",birth:"1995-12-2",salary:"6400",city:"江苏",phone:"18292932734", email:"ftime@11.com",project:"xx4银行项目组", status:"储备",date:"2019-3-22"}
                        ]
                    }
                ]
            };
        },
        methods: {
            onSelect1 (items) {
                console.log("onSelect1")
                this.selected1 = items
                console.log(items.length)
            }
        }
    }
</script>

<style scoped>

</style>