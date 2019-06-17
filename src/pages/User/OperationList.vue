<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card class="md-card-plain">
                    <md-card-header data-background-color="blue">
                        <h4 class="title">操作记录查看</h4>
                    </md-card-header>
                    <md-card-content>
                        <operation-table>
                        </operation-table>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
    import {OperationData} from "@/components";

    export default {
        name: "OperationList",
        components: {
            "operation-table":OperationData
        }
    }
</script>

<style scoped>

</style>