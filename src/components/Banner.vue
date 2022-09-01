<template>
  <div class="banner-wrapper">
    <div class="banner-main">
      <p class="main-text">Октябрьский турнир Warhammer 40000</p>
      <p class="sub-text">
        У тебя есть команда и вы готовы принять участие в турнире Warhammer
        40000?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
};
</script>

<style lang="scss" scoped>
.banner-wrapper {
  background: url("@/assets/images/banner/banner_main.jpg");
  @apply w-screen h-56 relative hidden justify-center items-center bg-no-repeat cursor-pointer;
  @apply TM:flex LM:bg-%100;

  &::after {
    content: "";
    background-color: rgb(37, 37, 37);
    @apply w-full h-full absolute top-0 left-0 opacity-40 transition-opacity duration-300;
  }

  &:hover {
    &::after {
      @apply opacity-50;
    }
  }

  & .banner-main {
    @apply max-w-6xl w-full flex flex-col justify-center items-start text-white font-trebuchet ml-10 z-10;

    & .main-text {
      @apply text-xl font-bold mb-4;
    }

    & .sub-text {
      @apply w-80;
    }
  }
}
</style>
