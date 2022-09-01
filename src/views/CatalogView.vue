<template>
  <div class="catalog-view">
    <banner-component />
    <details-component />
  </div>
</template>

<script>
// Components
import BannerComponent from "@/components/Banner.vue";
import DetailsComponent from "@/components/Details.vue";

export default {
  name: "CatalogView",
  components: {
    BannerComponent,
    DetailsComponent,
  },
};
</script>

<style lang="scss" scoped></style>
