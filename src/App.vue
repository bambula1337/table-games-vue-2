<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
//Tailwind SCSS Fi;e
import "@/assets/styles/tailwind/tailwind.scss";

//Components
import Header from "@/components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
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
