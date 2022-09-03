<template>
  <div class="footer">
    <div class="footer-main">
      <div class="top-container">
        <div class="logo-wrapper">
          <img src="@/assets/images/global/l3 1.svg" alt="" class="logo" />
          <p class="address">
            {{ information.address }}
          </p>
        </div>
        <div class="link-catalog">
          <p class="link">Каталог</p>
          <div class="catalog-links">
            <p class="link" v-for="link in links.catalog.links" :key="link.id">
              {{ link.name }}
            </p>
          </div>
        </div>
        <div class="links-wrapper">
          <p class="link" v-for="link in links.other" :key="link.id">
            {{ link.name }}
          </p>
        </div>
        <div class="delivery-wrapper">
          <p class="link">Оплата и доставка</p>
          <p class="link">Гарантия и возврат</p>
        </div>
        <div class="information">
          <button-orange-default class="contact-button"
            ><p class="button-text">Заказать звонок</p></button-orange-default
          >
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
      </div>
      <div class="bottom-container">
        <div class="bottom-information-mobile">
          <p class="information-text">
            Политика конфиденциальности Содержимое не является публичной офертой
            Пользовательское соглашение © 2021 MagicGoldFish.ru
          </p>
        </div>
        <div class="bottom-information-pc">
          <p class="privacy privacy-left">
            © 2021 MagicGoldFish.ru
            <span class="link">Политика конфиденциальности</span>
          </p>
          <div class="partners">
            <img
              alt=""
              class="partner"
              v-for="partner in partners"
              :key="partner.id"
              :src="srcFixer(partner.image.url)"
            />
          </div>
          <p class="privacy privacy-right">
            Содержимое не является публичной офертой
            <span class="link">Пользовательское соглашение</span>
            <router-link to="catalog">CATALOG</router-link>
            <router-link to="/" exact>HOME</router-link>
            <router-link to="error" exact>ERROR</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      links: {
        catalog: {
          name: "",
          url: "",
          links: [
            {
              id: 1,
              name: "Warhammer 40000",
              url: "",
            },
            {
              id: 2,
              name: "Настольные игры",
              url: "",
            },
            {
              id: 3,
              name: "Magic: the Gathering",
              url: "",
            },
            {
              id: 4,
              name: "Аксуссуары для игр",
              url: "",
            },
            {
              id: 5,
              name: "Краски",
              url: "",
            },
            {
              id: 6,
              name: "Аксессуары для моделизма",
              url: "",
            },
          ],
        },
        other: [
          {
            id: 1,
            name: "Правила клуба",
            url: "",
          },
          {
            id: 2,
            name: "Мероприятия",
            url: "",
          },
          {
            id: 3,
            name: "О нас",
            url: "",
          },
          {
            id: 4,
            name: "Контакты",
            url: "",
          },
          {
            id: 5,
            name: "Блог",
            url: "",
          },
        ],
      },
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
      partners: [
        {
          id: 1,
          name: "",
          image: {
            url: "images/partners/partner_1.svg",
          },
        },
        {
          id: 2,
          name: "",
          image: {
            url: "images/partners/partner_2.svg",
          },
        },
        {
          id: 3,
          name: "",
          image: {
            url: "images/partners/partner_3.svg",
          },
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
  @apply w-full flex justify-center bg-project-black;
  & .footer-main {
    @apply w-full flex flex-col bg-project-black px-5 pt-10 pb-7;
    @apply TM:max-w-6xl TM:pt-14;

    & .top-container {
      @apply flex flex-col items-center text-center;
      @apply TM:flex-row TM:justify-between TM:items-start TM:pb-22;
      & .logo-wrapper {
        @apply w-32 h-8 text-left mb-7;
        @apply TM:w-41;
        @apply TL:w-56;
        & .logo {
          @apply TM:w-34 TM:mb-4 cursor-pointer transition-opacity duration-300;
          @apply TL:w-38;
          &:hover {
            @apply opacity-70;
          }
        }
        & .address {
          @apply w-54 hidden text-white;
          @apply TM:inline;
        }
      }
      & .link-catalog {
        & .link {
          @apply flex flex-col items-center font-bold text-white mb-2 select-none cursor-pointer;
          @apply TM:items-start;
          @apply TL:text-lg;
          &::after {
            @apply w-0 border-t-2 border-white -mt-0.5 transition-all duration-300;
            content: "";
          }
          &:hover {
            &::after {
              @apply LS:w-7;
            }
          }
        }
        & .catalog-links {
          @apply hidden items-start;
          @apply TM:w-38 TM:flex TM:flex-col TM:text-left;
          & .link {
            @apply text-base font-normal mb-0 transition-all duration-300;
            &:hover {
              @apply opacity-70;
              &::after {
                @apply w-0;
              }
            }
          }
        }
      }
      & .links-wrapper {
        @apply h-40 flex flex-col justify-between items-center mb-6;
        @apply TM:h-40 TM:items-start;
        & .link {
          @apply flex flex-col items-center font-bold text-white select-none cursor-pointer;
          @apply TM:items-start;
          @apply TL:text-lg;
          &::after {
            @apply w-0 border-t-2 border-white -mt-0.5 transition-all duration-300;
            content: "";
          }
          &:hover {
            &::after {
              @apply LS:w-1/2;
            }
          }
        }
      }
      & .delivery-wrapper {
        @apply font-bold text-white text-left;
        & .link {
          @apply flex flex-col items-start font-bold text-white mb-2.5 select-none cursor-pointer;
          @apply TL:text-lg TL:mb-1;
          &::after {
            @apply w-0 border-t-2 border-white -mt-0.5 transition-all duration-300;
            content: "";
          }
          &:hover {
            &::after {
              @apply LS:w-1/2;
            }
          }
        }
      }
      & .information {
        @apply flex flex-col items-center;
        @apply TM:items-end TM:text-right;
        & .contact-button {
          @apply w-52 h-13 hidden bg-none border-1 border-project-orange text-lg text-project-orange mb-3;
          @apply TM:block;
          @apply TL:w-56;
          & .button-text {
            @apply h-13 flex justify-center items-center;
          }
        }
      }
      & .information-location-wrapper {
        @apply w-56 mb-4;
        & .information-location {
          @apply text-white;
          @apply TM:hidden;
        }
      }
      & .information-contact-wrapper {
        @apply font-bold text-white mb-4;
        & .information-contact-number {
          @apply mb-1.5;
        }
        & .information-contact-email {
        }
      }
      & .social-medias {
        @apply w-24 flex justify-between items-center mb-3.5 px-0.5 cursor-pointer;
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
      @apply relative;
      @apply TM:pt-7;
      &::before {
        @apply w-full h-10 absolute bottom-6 hidden opacity-50 border-t-2 border-project-gray;
        content: "";
        @apply TM:block;
      }
      & .bottom-information-mobile {
        @apply text-center;
        @apply TM:hidden;
        & .information-text {
          @apply text-project-gray opacity-50;
        }
      }
      & .bottom-information-pc {
        @apply w-full hidden justify-between text-project-gray opacity-50;
        @apply TM:flex;
        & .privacy {
          @apply text-sm;
          & .link {
            @apply underline cursor-pointer;
          }
        }
        & .privacy-left {
          @apply w-54;
        }
        & .privacy-right {
          @apply text-right;
          @apply w-76;
        }
        & .partners {
          @apply absolute left-%41.5 flex self-center;
          & .partner {
            @apply h-5 mr-2;
          }
        }
      }
    }
  }
}
</style>
