<template>
  <div class="contact">
    <div class="contact-main">
      <div class="left">
        <div class="main-text-wrapper">
          <p class="main-text">Контакты</p>
        </div>
        <div class="contacts" v-for="contact in contacts" :key="contact.id">
          <div class="contact">
            <div class="logo-wrapper">
              <img :src="srcFixer(contact.logo)" alt="" class="logo" />
            </div>
            <div class="text">
              <p class="main">
                {{ contact.text.main }}
              </p>
              <p class="sub">
                {{ contact.text.sub }}
              </p>
            </div>
          </div>
        </div>
        <div class="map"></div>
        <ShopContactForm />
      </div>
      <div class="right">
        <div class="map map-pc"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopContactForm from "@/components/ShopContactForm.vue";

export default {
  name: "ShopContact",
  components: {
    ShopContactForm,
  },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  @apply flex justify-center;
  & .contact-main {
    @apply w-full font-trebuchet;
    @apply TS:flex TS:justify-evenly TS:items-center;
    @apply TL:max-w-6xl TL:justify-between;
    & .left {
      @apply TS:w-116;
    }
    & .main-text-wrapper {
      @apply mb-4 px-5;
      & .main-text {
        @apply text-xl font-bold;
        @apply TS:text-3xl;
      }
    }
    & .contacts {
      @apply px-5;
      & .contact {
        @apply flex items-center mb-3.5;
        & .logo-wrapper {
          & .logo {
          }
        }
        & .text {
          @apply w-full ml-5;
          & .main {
            @apply font-bold -mb-0.5;
          }
          & .sub {
          }
        }
      }
    }
    & .map {
      @apply w-full h-60 bg-no-repeat;
      background: url("@/assets/images/contact/map.jpg");
      background-position: -6.5rem 0rem;
      @apply TS:hidden;
    }
    & .map-pc {
      @apply w-72 h-158 hidden bg-280 mr-5 rounded-project-default;
      background-position: -15rem 5rem;
      @apply TS:block;
      @apply TM:w-112;
      @apply TL:w-136;
    }
  }
}
</style>
