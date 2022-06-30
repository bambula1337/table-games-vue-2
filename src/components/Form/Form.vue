<template>
  <div class="font">
    <input type="tel" v-startNumber="'+7 '" v-mask="['+7 ### ####']" />
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  name: "FormComponent",
  directives: {
    startNumber: {
      inserted(el, bindind) {
        el.value = bindind.value;
      },
    },
    mask,
  },
};
</script>

<style lang="scss" scoped>
.form {
  @apply font-trebuchet;
}
</style>
