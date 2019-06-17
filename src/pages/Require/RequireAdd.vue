<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <RequireAddDetail data-background-color="blue"> </RequireAddDetail>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <RequireAddCard> </RequireAddCard>
      </div>
    </div>
  </div>
</template>

<script>
  import { RequireAddDetail,RequireAddCard } from "@/pages";
    export default {
        components: {
            RequireAddDetail,
            RequireAddCard
        }
    };
</script>
