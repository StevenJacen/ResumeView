<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card class="md-card-plain">
                    <md-card-header data-background-color="blue">
                        <h4 class="title">角色管理</h4>
                    </md-card-header>
                    <md-card-content>
                        <ordered-table>
                        </ordered-table>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
    import {RoleData} from "@/components";

    export default {
        components: {
            "ordered-table":RoleData
        }
    };
</script>
