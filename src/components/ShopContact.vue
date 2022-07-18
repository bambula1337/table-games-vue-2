<template>
  <div class="contact-wrapper">
    <div class="contact">
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
  data() {
    return {
      contacts: [
        {
          id: 1,
          logo: "images/contact/icon_phone.svg",
          text: {
            main: "Телефон:",
            sub: "+7 (495) 911-10-11",
          },
        },
        {
          id: 2,
          logo: "images/contact/icon_mail.svg",
          text: {
            main: "E-mail:",
            sub: "msk@magicgoldfish.ru",
          },
        },
        {
          id: 3,
          logo: "images/contact/icon_location.svg",
          text: {
            main: "Адрес:",
            sub: "г. Москва ст.м. Таганская Малый Дровяной переулок 6",
          },
        },
        {
          id: 4,
          logo: "images/contact/icon_schedule.svg",
          text: {
            main: "Режим работы клуба:",
            sub: "11:00-23:00 (ежедневно)",
          },
        },
      ],
    };
  },
  methods: {
    srcFixer: function (src) {
      return require(`@/assets/${src}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-wrapper {
  @apply flex justify-center;
}
.contact {
  @apply w-full font-trebuchet;
  @apply TS:flex TS:items-center TS:justify-evenly;
  @apply TL:max-w-6xl TL:justify-between;
  & .left {
    @apply TS:w-116;
  }
  & .main-text-wrapper {
    @apply px-5 mb-4;
    & .main-text {
      @apply font-bold text-xl;
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
        @apply ml-5 w-full;
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
    @apply hidden w-72 h-158 mr-5 rounded-project-default bg-280;
    background-position: -15rem 5rem;
    @apply TS:block;
    @apply TM:w-112;
    @apply TL:w-136;
  }
}
</style>
