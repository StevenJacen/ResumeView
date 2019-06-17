<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-size-66">
                <ProjectAddDetail data-background-color="blue"> </ProjectAddDetail>
            </div>
            <div class="md-layout-item md-medium-size-100 md-size-33">
                <ProjectAddCard> </ProjectAddCard>
            </div>
        </div>
    </div>
</template>

<script>
    import { ProjectAddDetail,ProjectAddCard } from "@/pages";
    export default {
        components: {
            ProjectAddDetail,
            ProjectAddCard
        }
    };
</script>
