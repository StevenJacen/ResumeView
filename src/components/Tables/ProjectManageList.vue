<template>
    <div>
        <md-table v-model="project" :table-header-color="tableHeaderColor" @md-selected="onSelect">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="项目名">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="描述">{{ item.desc}}</md-table-cell>
                <md-table-cell md-label="负责人">{{ item.principal}}</md-table-cell>
                <md-table-cell>
                    <md-button class="md-just-icon md-simple md-primary">
                        <md-icon>edit</md-icon>
                        <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-danger">
                        <md-icon>close</md-icon>
                        <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    export default {
        name: "projectlist",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                selected: [],
                project: [
                    {
                        name: "项目1",
                        desc: "上海",
                        principal: "张三"
                    },
                    {
                        name: "项目2",
                        desc: "北京",
                        principal: "张三"
                    },
                    {
                        name: "项目3",
                        desc: "广州",
                        principal: "李四"
                    },
                    {
                        name: "项目4",
                        desc: "深圳",
                        principal: "李四"
                    },
                    {
                        name: "项目5",
                        desc: "杭州",
                        principal: "李四"
                    }
                ]
            };
        },
        methods: {
            onSelect: function(items) {
                this.selected = items;
            }
        }
    };
</script>
