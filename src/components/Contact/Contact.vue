<template>
  <div class="contact">
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
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from "@/components/Form/Form.vue";

export default {
  name: "ContactComponent",
  components: {
    FormComponent,
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
.contact {
  @apply font-trebuchet;
  & .main-text-wrapper {
    @apply px-5 mb-4;
    & .main-text {
      @apply font-bold;
      font-size: 21px;
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
  }
}
</style>
