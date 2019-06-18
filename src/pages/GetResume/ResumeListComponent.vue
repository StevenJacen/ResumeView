<template>
    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <Table :columns="columns11" :data="requireList" :table-header-color="tableHeaderColor" size="large" border></Table>
    </div>
</template>

<script>
    export default {
        name: "ResumeListComponent",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            },
            upordown:""
        },
        data() {
            return {
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
                ],
                //new Component
                large:null,
                value2:null,
                showDialog: false,
                contenteditable:false,
                selected: [],
                columns11: [
                    {
                        title: '姓名',
                        key: 'name',
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
                        title: '性别',
                        key: 'sex',
                        className: 'demo-table-info-column',
                        align: 'center',
                        render: (h, params)=>{
                            return h('Button', {
                                props:{
                                    type: 'text',
                                    autosize: true
                                },
                                on: {
                                    'click': (event) => {
                                        this.showDialog=true;
                                    }
                                }
                            },this.requireList[params.index].sex);
                        }
                    },
                    {
                        title: '学历',
                        key: 'education',
                        className: 'demo-table-info-column',
                        align: 'center',
                    },
                    {
                        title: '生日',
                        key: 'birthday',
                        className: 'demo-table-info-column',
                        align: 'center',
                    },
                    {
                        title: '薪资',
                        key: 'money',
                        className: 'demo-table-info-column',
                        align: 'center',
                    },
                    {
                        title: '手机',
                        key: 'phone',
                        className: 'demo-table-info-column',
                        align: 'center',
                    },
                    {
                        title: '项目名',
                        key: 'projname',
                        className: 'demo-table-info-column',
                        align: 'center',
                    },
                    {
                        title: '状态',
                        key: 'state',
                        className: 'demo-table-info-column',
                        align: 'center',
                    },
                    {
                        title: '面试时间',
                        key: 'interviewtime',
                        className: 'demo-table-info-column',
                        align: 'center',
                    },
                    {
                        title: '简历'+this.upordown,
                        key: 'download',
                        align: 'center',
                        className: 'demo-table-info-column',
                        render: (h, params)=>{
                            return h('Button', {
                                props:{
                                    class: "md-info",
                                    autosize: true
                                },
                                on: {
                                    'click': (event) => {
                                        this.showDialog=true;
                                    }
                                }
                            },this.upordown);
                        }
                    }
                ],
                data10: [],
                requireList: [
                    {
                        name: "张三",
                        sex: "男",
                        education: "本科",
                        birthday: "1993-1-1",
                        money: "5000",
                        phone: "12345678",
                        projname:"浦发项目组",
                        state: "待面试",
                        interviewtime:"2019-3-20"
                    },
                    {
                        name: "李四",
                        sex: "男",
                        education: "本科",
                        birthday: "1993-1-1",
                        money: "5000",
                        phone: "12345678",
                        projname:"浦发项目组",
                        state: "待面试",
                        interviewtime:"2019-3-20"
                    },
                    {
                        name: "王五",
                        sex: "男",
                        education: "本科",
                        birthday: "1993-10-10",
                        money: "5000",
                        phone: "12345678",
                        projname:"浦发项目组",
                        state: "待面试",
                        interviewtime:"2019-3-20"
                    },
                    {
                        name: "赵六",
                        sex: "男",
                        education: "本科",
                        birthday: "1993-10-10",
                        money: "5000",
                        phone: "12345678",
                        projname:"浦发项目组",
                        state: "待面试",
                        interviewtime:"2019-3-20"
                    },
                    {
                        name: "孙七",
                        sex: "男",
                        education: "本科",
                        birthday: "1993-10-10",
                        money: "5000",
                        phone: "12345678",
                        projname:"浦发项目组",
                        state: "待面试",
                        interviewtime:"2019-3-20"
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