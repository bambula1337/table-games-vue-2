<template>
  <div class="error">
    <p>ERROR VIEW</p>
  </div>
</template>

<script>
export default {
  name: "ErrorView",
  mounted() {
    console.log("ErrorView has been mounted");
  },
  beforeDestroy() {
    console.log("ErrorView has been destroyed");
  },
};
</script>

<style scoped></style>
