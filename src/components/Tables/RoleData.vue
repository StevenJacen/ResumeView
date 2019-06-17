<template>
    <div>
        <md-table v-model="users" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="角色名">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="描述">{{ item.description }}</md-table-cell>
                <md-table-cell md-label="关联用户">
                    <md-button class="md-just-icon md-simple md-primary" @click="showDialog = true">
                        <md-icon >edit</md-icon>
                        <md-tooltip md-direction="top">关联用户：XX、XXX..</md-tooltip>
          </md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>
        <md-dialog :md-active.sync="showDialog">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card class="md-card-plain">
                    <md-card-header data-background-color="blue">
                        <h4 class="title">关联角色</h4>
                        <p class="category">新增关联的用户</p>
                    </md-card-header>
                    <md-card-content>
                    </md-card-content>
                </md-card>
            </div>
        </md-dialog>
    </div>


</template>

<script>
    export default {
        name: "ordered-table",
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
                        name: "招聘人员",
                        description: "进行招聘的人员"
                    },
                    {
                        name: "需求人员",
                        description: "提供招聘需求的人员"
                    },
                    {
                        name: "管理人员",
                        description: "管理用户角色和权限人员"
                    },
                    {
                        name: "维护人员",
                        description: "维护信息人员"
                    }
                ]
            };
        }
    };
</script>
