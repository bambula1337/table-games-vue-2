<template>
  <div id="app">
    <component :is="layout"> </component>
  </div>
</template>

<script>
// Tailwind SCSS Fi;e
import "@/assets/styles/tailwind/tailwind.scss";

import DefaultLayout from "@/layouts/DefaultLayout";
import ErrorLayout from "@/layouts/ErrorLayout";

export default {
  name: "App",
  components: {
    DefaultLayout,
    ErrorLayout,
  },
  computed: {
    layout: function () {
      if (this.$route.meta.layout) {
        return this.$route.meta.layout + "-layout";
      } else {
        return "default-layout";
      }
    },
  },
};
</script>

<style lang="scss">
//Scroll Styles

::-webkit-scrollbar {
  width: 0.6vw;
}

::-webkit-scrollbar-track {
  background-color: rgb(163, 163, 163);
}

::-webkit-scrollbar-thumb {
  background-color: rgb(116, 116, 116);
  border-radius: 30px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(94, 94, 94);
}
</style>
