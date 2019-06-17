<template>
        <form>
            <md-card >
                <md-card-header :data-background-color="dataBackgroundColor" >
                    <h4 class="title">项目新增页面</h4>
                </md-card-header>

                <md-card-content>
                    <div class="md-layout md-gutter md-small-size-100 md-size-50">

                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label>项目名</label>
                                <md-input v-model="projectName" type="text"></md-input>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label>描述</label>
                                <md-input v-model="desc" type="text"></md-input>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label for="principal">项目负责人</label>
                                <md-select v-model="principal" name="principal" id="principal">
                                    <md-option value="fight-club">张三</md-option>
                                    <md-option value="godfather">李四</md-option>
                                </md-select>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>
            </md-card>
        </form>
</template>
<script>
    export default {
        name: "edit-profile-form",
        props: {
            dataBackgroundColor: {
                type: String,
                default: "",
            }
        },
        data() {
            return {
                principal: null,
                projectName:"",
                desc:"",
                aboutme:
                    "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
            };
        },
    };
</script>
<style>

</style>
