<template>
  <div class="footer">
    <div class="top-container">
      <div class="logo-wrapper">
        <img src="@/assets/images/global/l3 1.svg" alt="" class="logo" />
      </div>
      <div class="links-wrapper">
        <p class="link" v-for="link in links" :key="link.id">
          {{ link.name }}
        </p>
      </div>
      <div class="information-location-wrapper">
        <p class="information-location">
          {{ information.address }}
        </p>
      </div>
      <div class="information-contact-wrapper">
        <p class="information-contact-number">
          {{ information.number }}
        </p>
        <p class="information-contact-email">
          {{ information.email }}
        </p>
      </div>
      <div class="social-medias">
        <div class="social-media" v-for="social in social" :key="social.id">
          <img
            :src="srcFixer(social.img.url)"
            alt=""
            class="social-media-img"
          />
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <div class="bottom-information-mobile">
        <p class="information-text">
          Политика конфиденциальности Содержимое не является публичной офертой
          Пользовательское соглашение © 2021 MagicGoldFish.ru
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      links: [
        {
          id: 1,
          name: "Каталог",
          url: "",
        },
        {
          id: 2,
          name: "Правила клуба",
          url: "",
        },
        {
          id: 3,
          name: "Мероприятия",
          url: "",
        },
        {
          id: 4,
          name: "О нас",
          url: "",
        },
        {
          id: 5,
          name: "Контакты",
          url: "",
        },
        {
          id: 6,
          name: "Блог",
          url: "",
        },
      ],
      information: {
        address: "г. Москва ст.м. Таганская Малый Дровяной переулок 6",
        number: "+7 (495) 911-10-11",
        email: "msk@magicgoldfish.ru",
      },
      social: [
        {
          id: 1,
          name: "instagram",
          img: {
            url: "images/social/instagram.svg",
          },
          url: "",
        },
        {
          id: 2,
          name: "vk",
          img: {
            url: "images/social/vk.svg",
          },
          url: "",
        },
        {
          id: 3,
          name: "facebook",
          img: {
            url: "images/social/facebook.svg",
          },
          url: "",
        },
      ],
    };
  },
  methods: {
    srcFixer(src) {
      return require(`@/assets/${src}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  @apply flex flex-col w-full bg-project-black px-5 pt-10 pb-7;

  & .top-container {
    @apply flex flex-col items-center text-center;
    & .logo-wrapper {
      @apply w-32 h-8 mb-7;
      & .logo {
      }
    }
    & .links-wrapper {
      @apply h-40 flex flex-col justify-between items-center mb-6;
      & .link {
        @apply flex flex-col items-center text-white font-bold select-none cursor-pointer;
        &::after {
          @apply w-0 transition-all duration-300 -mt-0.5;
          content: "";
          border-top: 2px white solid;
        }
        &:hover {
          &::after {
            @apply LS:w-1/2;
          }
        }
      }
    }
    & .information-location-wrapper {
      @apply w-56 mb-4;
      & .information-location {
        @apply text-white;
      }
    }
    & .information-contact-wrapper {
      @apply text-white font-bold mb-4;
      & .information-contact-number {
        @apply mb-1.5;
      }
      & .information-contact-email {
      }
    }
    & .social-medias {
      @apply w-24 flex items-center justify-between px-0.5 mb-3.5;
      & .social-media {
        &:hover {
          & .social-media-img {
            filter: invert(98%) sepia(19%) saturate(6717%) hue-rotate(220deg)
              brightness(100%) contrast(100%);
          }
        }
        & .social-media-img {
        }
      }
    }
  }
  & .bottom-container {
    & .bottom-information-mobile {
      @apply text-center;
      & .information-text {
        color: rgba(255, 255, 255, 0.44);
      }
    }
  }
}
</style>
