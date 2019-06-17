<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">软件工程师</h6>
      <h4 class="card-title">艾利克斯</h4>
      <p class="card-description">
        本人性格开朗、稳重、有活力，待人热情、真诚；工作认真负责，
        积极主动，能吃苦耐劳，用于承受压力，勇于创新；有很强的组织
        能力和团队协作精神，具有较强的适应能力；纪律性强，工作积极
        配合；意志坚强，具有较强的无私奉献精神
      </p>
      <md-button class="md-round md-success">下一个</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
  export default {
    name: "user-card",
    props: {
      cardUserImage: {
        type: String,
        default: require("@/assets/img/faces/marc.jpg")
      }
    },
    data() {
      return {};
    }
  };
</script>
<style></style>
