<template>
    <div>
        <md-table v-model="users" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="用户名">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="操作描述">{{ item.description }}</md-table-cell>
                <md-table-cell md-label="操作时间">{{ item.time }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>


</template>

<script>
    export default {
        name: "operation-table",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                showDialog : false,
                selected: [],
                users: [
                    {
                        name: "常成",
                        description: "创建简历",
                        time:"2019-3-1"
                    },
                    {
                        name: "常成",
                        description: "创建简历",
                        time:"2019-3-1"
                    },
                    {
                        name: "常成",
                        description: "创建简历",
                        time:"2019-3-1"
                    },
                    {
                        name: "常成",
                        description: "创建简历",
                        time:"2019-3-1"
                    }
                ]
            };
        }
    };
</script>
