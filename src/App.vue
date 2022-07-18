<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
//Tailwind SCSS Fi;e
import "@/assets/styles/tailwind/tailwind.scss";

//Components
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
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
