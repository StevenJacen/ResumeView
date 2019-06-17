<template>
    <md-card>
        <md-card-header data-background-color="blue">
            <h4 class="title">推荐项目</h4>
        </md-card-header>
        <md-card-content>
            <md-table v-model="addprojects" :table-header-color="tableHeaderColor" @md-selected="onSelect">
                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
                    <md-table-cell md-label="项目编号">{{ item.pnum }}</md-table-cell>
                    <md-table-cell md-label="项目名称">{{ item.pname }}</md-table-cell>
                    <md-table-cell md-label="项目负责人">{{ item.preser }}</md-table-cell>
                </md-table-row>
            </md-table>
        </md-card-content>
    </md-card>
</template>

<script>
    export default {
        name: "RecommandProj",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
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
            };
        },
        methods: {
            onSelect (items) {
                console.log("onSelect")
                this.selected = items
            }
        }

    }
</script>

<style scoped>

</style>