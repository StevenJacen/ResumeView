<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <p class="card-description">
        发布新需求，更快为您找到合适人员
      </p>
      <md-button class="md-round md-success" data-background-color="blue"  @click="gotolink">发布</md-button>
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
        methods:{
            gotolink()
            {
                this.$router.replace('/projectRequire')
            }
        },
        data() {
            return {};
        }
    };


</script>
<style></style>
