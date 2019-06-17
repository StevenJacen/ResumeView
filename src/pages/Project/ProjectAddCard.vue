<template>
    <md-card class="md-card-profile">
        <div class="md-card-avatar">
            <img class="img" :src="cardUserImage" />
        </div>

        <md-card-content>
            <p class="card-description">
                新增项目
            </p>
            <md-button class="md-round md-success" data-background-color="blue" @click="gotolink">新增</md-button>
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
                this.$router.replace('/projectManage')
            }
        },
        data() {
            return {};
        }
    };


</script>
<style></style>
