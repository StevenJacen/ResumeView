<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }" >
        <md-table-cell md-label="用户" contenteditable="true">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="登录名" contenteditable="true">{{ item.identity }}</md-table-cell>
        <md-table-cell md-label="手机号" contenteditable="true">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="邮箱地址" contenteditable="true">{{ item.email }}</md-table-cell>
        <md-button class="md-just-icon md-simple md-primary" @click="showDialog = true">
          <md-icon>delete</md-icon>
        </md-button>
      </md-table-row>
    </md-table>
    <md-dialog :md-active.sync="showDialog">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <md-card-content> 确认删除该用户？
          </md-card-content>
        </md-card>
      </div>
      <md-dialog-actions>
        <md-button class="md-info"  @click="showDialog = false">确认</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showDialog:false,
      selected: [],
      users: [
        {
          name: "顾建生",
          identity: "gujs",
          phone: "13651808966",
          email: "jacen_gu@126.com"
        },
        {
          name: "李芳强",
          identity: "lifq",
          phone: "13651808966",
          email: "jacen_gu@126.com"
        },
        {
          name: "吴乾",
          identity: "wuq",
          phone: "13651808966",
          email: "jacen_gu@126.com"
        },
        {
          name: "常成",
          identity: "changc",
          phone: "13651808966",
          email: "jacen_gu@126.com"
        }
      ]
    };
  }
};
</script>
