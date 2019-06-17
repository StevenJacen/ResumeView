<template>

    <div class="content">
        <md-dialog :md-active.sync="showDialog" >
            <div>
                <md-card class="md-card-plain">
                    <md-card-header data-background-color="blue">
                        <h5 class="title">需求详情列表 </h5>
                    </md-card-header>
                    <md-card-content>
                        <md-table v-model="requireDetail" :table-header-color="tableHeaderColor">
                            <md-table-row slot="md-table-row" slot-scope="{ item }">
                                <md-table-cell md-label="项目名称">{{ item.prjname }}</md-table-cell>
                                <md-table-cell md-label="类型">{{ item.type }}</md-table-cell>
                                <md-table-cell md-label="数量">{{ item.num }}</md-table-cell>
                                <md-table-cell md-label="符合">{{ item.conform }}</md-table-cell>
                                <md-table-cell md-label="发布时间">{{ item.time }}</md-table-cell>
                                <!--<md-table-cell md-label="数量" v-if="contenteditable===true" >-->
                                <!--<Input style="width: 60px" v-bind:value="item.num"/>-->
                                <!--</md-table-cell>-->
                                <md-table-cell md-label="操作" style="width: 100px;">
                                    <!--<md-button class="md-just-icon md-simple md-primary" v-if="contenteditable===false" @click="contenteditable = true">-->
                                    <!--<md-icon>edit</md-icon>-->
                                    <!--<md-tooltip md-direction="top">编辑</md-tooltip>-->
                                    <!--</md-button>-->
                                    <!--<md-button class="md-just-icon md-simple md-primary" v-if="contenteditable===true" @click="contenteditable = false">-->
                                    <!--<md-icon>save</md-icon>-->
                                    <!--<md-tooltip md-direction="top">保存</md-tooltip>-->
                                    <!--</md-button>-->
                                    <md-button class="md-just-icon md-simple md-danger">
                                        <md-icon>close</md-icon>
                                        <md-tooltip md-direction="top">废弃</md-tooltip>
                                    </md-button>
                                </md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-card-content>
                </md-card>
            </div>
            <md-dialog-actions>
                <Button :size="large"><</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>></Button>共2页&nbsp;&nbsp;&nbsp;
                到第<Input v-model="value2" style="width: 30px" placeholder="1"/>页
            </md-dialog-actions>
        </md-dialog>

        <md-dialog :md-active.sync="showResume" style="width: 70%;height: 70%">
            <projectRequireList upordown="上传"></projectRequireList>
        </md-dialog>

        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <Table :columns="columns11" :data="requireList" :table-header-color="tableHeaderColor" size="large" border>
                </Table>
            </div>
        </div>
        <md-dialog-actions>
            <Button :size="large"><</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>></Button>共2页&nbsp;&nbsp;&nbsp;
            到第<Input v-model="value2" style="width: 30px" placeholder="1"/>页
        </md-dialog-actions>
    </div>
</template>

<script>
    import ResumeListComponent from "../../pages/GetResume/ResumeListComponent";
    var info=
        {
            name: "prj-req",
            props: {
                tableHeaderColor: {
                    type: String,
                    default: ""
                }
            },
            components: {
                "projectRequireList": ResumeListComponent
            },
            data() {
                return {
                    large:null,
                    value2:null,
                    showDialog: false,
                    showResume:false,
                    contenteditable:false,
                    selected: [],
                    columns11: [
                        {
                            title: '项目',
                            key: 'prjName',
                            align: 'center',
                            fixed: 'left',
                            className: 'demo-table-info-column',
                            filters: [
                                {
                                    label: '浦发项目组',
                                    value: 1
                                },
                                {
                                    label: '宁波项目组',
                                    value: 2
                                }
                            ],
                            filterMultiple: false,
                            filterMethod (value, row) {
                                if (value === 1) {
                                    return row.name === '浦发项目组';
                                } else if (value === 2) {
                                    return row.name === '宁波项目组';
                                }
                            }
                        },
                        {
                            title: '需求数量',
                            key: 'requireNum',
                            align: 'center',
                            fixed: 'left',
                            className: 'demo-table-info-column',
                            sortable: true,
                            render:(h, params) => {
                                return h('a',{
                                    on: {
                                        click: () => {
                                            this.showDialog=true;
                                        }
                                    }
                                },info.data().requireList[params.index].requireNum)
                            }
                        },
                        {
                            title: '面试阶段',
                            align: 'center',
                            className: 'demo-table-info-column',
                            children: [
                                {
                                    title: '待面试',
                                    key: 'waitInterview',
                                    className: 'demo-table-info-column',
                                    align: 'center',
                                    render:(h, params) => {
                                        return h('a',{
                                            on: {
                                                click: () => {
                                                    this.showResume=true;
                                                }
                                            }
                                        },info.data().requireList[params.index].waitInterview)
                                    }
                                },
                                {
                                    title: '面试通过',
                                    key: 'interViewPass',
                                    className: 'demo-table-info-column',
                                    align: 'center',
                                    render:(h, params) => {
                                        return h('a',{
                                            on: {
                                                click: () => {
                                                    this.showResume=true;
                                                }
                                            }
                                        },info.data().requireList[params.index].interViewPass)
                                    }
                                }
                            ],
                        },
                        {
                            title: '入场阶段',
                            align: 'center',
                            className: 'demo-table-info-column',
                            children: [
                                {
                                    title: '入场',
                                    key: 'entry',
                                    align: 'center',
                                    className: 'demo-table-info-column',
                                    render:(h, params) => {
                                        return h('a',{
                                            on: {
                                                click: () => {
                                                    this.showResume=true;
                                                }
                                            }
                                        },info.data().requireList[params.index].entry)
                                    }
                                },
                                {
                                    title: '放弃',
                                    key: 'drop',
                                    align: 'center',
                                    className: 'demo-table-info-column',
                                    render:(h, params) => {
                                        return h('a',{
                                            on: {
                                                click: () => {
                                                    this.showResume=true;
                                                }
                                            }
                                        },info.data().requireList[params.index].drop)
                                    }
                                },
                                {
                                    title: '储备',
                                    key: 'store',
                                    align: 'center',
                                    className: 'demo-table-info-column',
                                    render:(h, params) => {
                                        return h('a',{
                                            on: {
                                                click: () => {
                                                    this.showResume=true;
                                                }
                                            }
                                        },info.data().requireList[params.index].store)
                                    }
                                }
                            ]
                        },
                    ],
                    data10: [],
                    requireList: [
                        {
                            prjName: "浦发项目组",
                            requireNum: "10",
                            waitInterview: "20",
                            interViewPass: "3",
                            entry: "5",
                            drop: "7",
                            store: "3"
                        },
                        {
                            prjName: "平安项目组",
                            requireNum: "8",
                            waitInterview: "10",
                            interViewPass: "6",
                            entry: "4",
                            drop: "5",
                            store: "1"
                        },
                        {
                            prjName: "广州银行项目组",
                            requireNum: "13",
                            waitInterview: "15",
                            interViewPass: "3",
                            entry: "6",
                            drop: "3",
                            store: "7"
                        },
                        {
                            prjName: "宁波银行项目组",
                            requireNum: "6",
                            waitInterview: "10",
                            interViewPass: "6",
                            entry: "3",
                            drop: "2",
                            store: "3"
                        },
                        {
                            prjName: "江西银行项目组",
                            requireNum: "6",
                            waitInterview: "10",
                            interViewPass: "13",
                            entry: "15",
                            drop: "7",
                            store: "13"
                        },
                        {
                            prjName: "浙商银行项目组",
                            requireNum: "9",
                            waitInterview: "11",
                            interViewPass: "2",
                            entry: "13",
                            drop: "6",
                            store: "13"
                        },
                        {
                            prjName: "招商银行项目组",
                            requireNum: "12",
                            waitInterview: "28",
                            interViewPass: "30",
                            entry: "50",
                            drop: "70",
                            store: "30"
                        }
                    ],
                    requireDetail: [
                        {
                            prjname: "浦发项目组",
                            type: "功能高级",
                            num: "3",
                            test:false,
                            conform: 2,
                            time: "2019-6-14"
                        },
                        {
                            prjname: "浦发项目组",
                            type: "功能中级",
                            num: "2",
                            conform: 2,
                            time: "2019-6-14"
                        },
                        {
                            prjname: "浦发项目组",
                            type: "功能初级",
                            num: "4",
                            conform: 2,
                            time: "2019-6-14"
                        },
                    ]
                };
            },
            methods: {
            },
        };
    export default info;
</script>
<style>
    .ivu-table th.demo-table-info-column{
        color:#00bcd4;
        font-size: 17px;
        font-family: Helvetica Neue;
    }
</style>