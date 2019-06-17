<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">用户管理</h4>
          </md-card-header>
          <md-card-content>
            <user-data table-header-color="blue"></user-data>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { UserData } from "@/components";

export default {
  components: {
    "user-data":UserData
  }
};
</script>
