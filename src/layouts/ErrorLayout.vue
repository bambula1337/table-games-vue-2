<template>
  <div class="error">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ErrorLayout",
  mounted() {
    console.log("ErrorLayout has been mounted");
  },
  beforeDestroy() {
    console.log("ErrorLayout has been destroyed");
  },
};
</script>

<style scoped></style>
