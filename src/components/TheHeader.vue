<template>
  <div class="header">
    <div class="header-main">
      <div
        class="mobile-menu-opener-wrapper"
        :class="{ 'mobile-opened': isMobileMenuOpened }"
        @click="mobileMenuOpener"
      >
        <span class="opener"></span>
      </div>
      <transition name="menu">
        <div class="mobile-menu" v-if="isMobileMenuOpened">
          <div class="categories" ref="categories">
            <details
              id="category"
              v-for="category in categories"
              :key="category.id"
            >
              <summary class="category-summary" @click.prevent="categoryOpener">
                <p class="summary-text">{{ category.name }}</p>
                <div class="arrow">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#2A2A2A" />
                  </svg>
                </div>
              </summary>
              <div class="sub-categories">
                <div
                  class="sub-category"
                  v-for="subCategory in category.subCategories"
                  :key="subCategory.id"
                >
                  {{ subCategory.name }}
                </div>
              </div>
            </details>
          </div>
          <div class="links-wrapper">
            <p class="link">Мероприятия</p>
            <p class="link">Блог</p>
            <p class="link">О центре</p>
            <p class="link">Контакты</p>
          </div>
        </div>
      </transition>
      <div class="logo-wrapper">
        <img src="@/assets/images/global/l3 1.svg" alt="" class="logo" />
      </div>
      <div class="search-wrapper">
        <input type="text" class="search-input" placeholder="Найти игру" />
        <div class="search-icon-wrapper">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4998 17.4993L13.7615 13.7543L17.4998 17.4993ZM15.8332 8.74935C15.8332 10.628 15.0869 12.4296 13.7585 13.758C12.4301 15.0864 10.6285 15.8327 8.74984 15.8327C6.87122 15.8327 5.06955 15.0864 3.74116 13.758C2.41278 12.4296 1.6665 10.628 1.6665 8.74935C1.6665 6.87073 2.41278 5.06906 3.74116 3.74068C5.06955 2.41229 6.87122 1.66602 8.74984 1.66602C10.6285 1.66602 12.4301 2.41229 13.7585 3.74068C15.0869 5.06906 15.8332 6.87073 15.8332 8.74935V8.74935Z"
              stroke="#2A2A2A"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div class="number-wrapper">
        <div class="icon">
          <svg
            width="currentWidth"
            height="currentHeight"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.25 16.875C17.5 18.5625 17.5 20.25 15.75 20.25C14 20.25 12.25 18.5625 10.5 16.875C8.75 15.1875 7 13.5 7 11.8125C7 10.125 8.75 10.125 10.5 8.4375C12.25 6.75 7 1.6875 5.25 1.6875C3.5 1.6875 0 6.75 0 6.75C0 10.125 3.59625 16.9678 7 20.25C10.4038 23.5322 17.5 27 21 27C21 27 26.25 23.625 26.25 21.9375C26.25 20.25 21 15.1875 19.25 16.875Z"
              fill="white"
            />
          </svg>
        </div>
        <p class="number">+7 (495) 911-10-11</p>
      </div>
      <div class="icons-wrapper">
        <div class="user-icon-wrapper">
          <svg
            width="currentWidth"
            height="currentHeight"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.826172C8.63636 0.826172 7.57102 1.33025 6.80398 2.3384C6.03693 3.34655 5.65341 4.63528 5.65341 6.20457C5.64394 8.1543 6.26894 9.69981 7.52841 10.8411C7.68939 10.9933 7.74621 11.1883 7.69886 11.426L7.37216 12.1108C7.26799 12.3391 7.11411 12.5174 6.91051 12.6458C6.70691 12.7742 6.27841 12.9573 5.625 13.1951C5.59659 13.2046 4.99763 13.3995 3.82813 13.78C2.65862 14.1604 2.03598 14.3697 1.96023 14.4077C1.16477 14.7406 0.643939 15.0877 0.397727 15.4491C0.132576 16.0483 0 17.5653 0 20.0001H20C20 17.5653 19.8674 16.0483 19.6023 15.4491C19.3561 15.0877 18.8352 14.7406 18.0398 14.4077C17.964 14.3697 17.3414 14.1604 16.1719 13.78C15.0024 13.3995 14.4034 13.2046 14.375 13.1951C13.7216 12.9573 13.2931 12.7742 13.0895 12.6458C12.8859 12.5174 12.732 12.3391 12.6278 12.1108L12.3011 11.426C12.2538 11.1883 12.3106 10.9933 12.4716 10.8411C13.7311 9.69981 14.3561 8.1543 14.3466 6.20457C14.3466 4.63528 13.9631 3.34655 13.196 2.3384C12.429 1.33025 11.3636 0.826172 10 0.826172Z"
              fill="white"
            />
          </svg>
        </div>
        <div class="basket-icon-wrapper">
          <svg
            width="currentWidth"
            height="currentHeight"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.08 4.00059C18.9072 3.70121 18.6598 3.45172 18.3618 3.27646C18.0639 3.1012 17.7256 3.00615 17.38 3.00059H4.58L4 0.740586C3.9414 0.522425 3.81066 0.33053 3.62908 0.196158C3.44749 0.0617862 3.22576 -0.00714676 3 0.00058648H1C0.734783 0.00058648 0.480429 0.105943 0.292893 0.29348C0.105357 0.481016 0 0.73537 0 1.00059C0 1.2658 0.105357 1.52016 0.292893 1.70769C0.480429 1.89523 0.734783 2.00059 1 2.00059H2.24L5 12.2606C5.0586 12.4787 5.18934 12.6706 5.37092 12.805C5.55251 12.9394 5.77424 13.0083 6 13.0006H15C15.1847 13 15.3656 12.9483 15.5227 12.8513C15.6798 12.7542 15.8069 12.6155 15.89 12.4506L19.17 5.89059C19.3122 5.5926 19.3783 5.26406 19.3626 4.93427C19.3469 4.60448 19.2498 4.28371 19.08 4.00059Z"
              fill="white"
            />
            <path
              d="M5.5 18C6.32843 18 7 17.3284 7 16.5C7 15.6716 6.32843 15 5.5 15C4.67157 15 4 15.6716 4 16.5C4 17.3284 4.67157 18 5.5 18Z"
              fill="white"
            />
            <path
              d="M15.5 18C16.3284 18 17 17.3284 17 16.5C17 15.6716 16.3284 15 15.5 15C14.6716 15 14 15.6716 14 16.5C14 17.3284 14.6716 18 15.5 18Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="search-for-mobile">
      <input type="text" class="search-input" placeholder="Найти игру" />
      <div class="search-icon-wrapper">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4998 17.4993L13.7615 13.7543L17.4998 17.4993ZM15.8332 8.74935C15.8332 10.628 15.0869 12.4296 13.7585 13.758C12.4301 15.0864 10.6285 15.8327 8.74984 15.8327C6.87122 15.8327 5.06955 15.0864 3.74116 13.758C2.41278 12.4296 1.6665 10.628 1.6665 8.74935C1.6665 6.87073 2.41278 5.06906 3.74116 3.74068C5.06955 2.41229 6.87122 1.66602 8.74984 1.66602C10.6285 1.66602 12.4301 2.41229 13.7585 3.74068C15.0869 5.06906 15.8332 6.87073 15.8332 8.74935V8.74935Z"
            stroke="#2A2A2A"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
    <div class="catalog-for-pc">
      <div class="catalog-main">
        <div class="catalog-opener" @click="isMenuOpened = true">
          <span class="opener"></span>
        </div>
        <div class="links-wrapper">
          <p class="link" v-for="link in catalog.links" :key="link.id">
            {{ link.name }}
          </p>
        </div>
        <div class="icons-wrapper">
          <div class="icon" v-for="icon in catalog.icons" :key="icon.id">
            <img :src="srcFixer(icon.img.url)" alt="" class="icon-img" />
          </div>
        </div>
      </div>
      <transition name="category-menu">
        <div class="catalog-menu" v-show="isMenuOpened">
          <div class="catalog-menu-main">
            <div class="left">
              <div class="top">
                <div class="catalog-closer" @click="isMenuOpened = false">
                  <span class="closer"></span>
                </div>
                <p class="text">Все категории</p>
              </div>
              <div class="bottom">
                <div
                  class="category"
                  :class="{
                    'category-selected':
                      category.subCategories == categoriesSelected.categories,
                  }"
                  v-for="category in categories"
                  :key="category.key"
                  @click="
                    subCategoryOpener(category.name, category.subCategories)
                  "
                >
                  <p class="name">
                    {{ category.name }}
                  </p>
                  <div class="arrow">
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z"
                        fill="#2A2A2A"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p
              class="categories-selected-name"
              :class="{
                'categories-selected-name-is-selected':
                  categoriesSelected.isSelected,
              }"
            >
              {{ categoriesSelected.name }}
            </p>
            <transition-group name="categories-selected" class="right">
              <p
                class="sub-category"
                v-for="subCategory in categoriesSelected.categories"
                :key="subCategory.id"
              >
                {{ subCategory.name }}({{ subCategory.number }})
              </p>
            </transition-group>
          </div>
        </div>
      </transition>
    </div>
    <div
      class="overlay"
      :class="{ 'menu-opened-for-overlay': isMobileMenuOpened }"
    ></div>
    <div
      class="pc-overlay"
      :class="{ 'category-opened-for-overlay': isMenuOpened }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isMobileMenuOpened: false,
      isMenuOpened: false,
      categories: [
        {
          id: 1,
          name: "Настольные Игры",
          url: "",
          subCategories: [
            {
              id: 1,
              name: "Альтернативные миниатюры",
              url: "",
              number: 10,
            },
            {
              id: 2,
              name: "Warhammer 40k",
              url: "",
              number: 10,
            },
            {
              id: 3,
              name: "Age of Sigmar",
              url: "",
              number: 10,
            },
            {
              id: 4,
              name: "Warcry",
              url: "",
              number: 10,
            },
            {
              id: 5,
              name: "Necromunda",
              url: "",
              number: 10,
            },
            {
              id: 6,
              name: "Lord of the Rings",
              url: "",
              number: 10,
            },
            {
              id: 7,
              name: "Blood Bowl",
              url: "",
              number: 10,
            },
            {
              id: 8,
              name: "Titanicus",
              url: "",
              number: 10,
            },
            {
              id: 9,
              name: "Warcry",
              url: "",
              number: 10,
            },
            {
              id: 10,
              name: "Warhammer: Underworlds",
              url: "",
              number: 10,
            },
            {
              id: 11,
              name: "Killtem",
              url: "",
              number: 10,
            },
          ],
        },
        {
          id: 2,
          name: "Warhammer 40000",
          url: "",
          subCategories: [
            {
              id: 1,
              name: "Альтернативные миниатюры",
              url: "",
            },
            {
              id: 2,
              name: "Warhammer 40k",
              url: "",
            },
            {
              id: 3,
              name: "Age of Sigmar",
              url: "",
            },
            {
              id: 4,
              name: "Warcry",
              url: "",
            },
            {
              id: 5,
              name: "Necromunda",
              url: "",
            },
            {
              id: 6,
              name: "Lord of the Rings",
              url: "",
            },
            {
              id: 7,
              name: "Blood Bowl",
              url: "",
            },
            {
              id: 8,
              name: "Titanicus",
              url: "",
            },
            {
              id: 9,
              name: "Warcry",
              url: "",
            },
            {
              id: 10,
              name: "Warhammer: Underworlds",
              url: "",
            },
            {
              id: 11,
              name: "Killtem",
              url: "",
            },
          ],
        },
        {
          id: 3,
          name: "Magic: the Gathering",
          url: "",
          subCategories: [
            {
              id: 1,
              name: "Альтернативные миниатюры",
              url: "",
            },
            {
              id: 2,
              name: "Warhammer 40k",
              url: "",
            },
            {
              id: 3,
              name: "Age of Sigmar",
              url: "",
            },
            {
              id: 4,
              name: "Warcry",
              url: "",
            },
            {
              id: 5,
              name: "Necromunda",
              url: "",
            },
            {
              id: 6,
              name: "Lord of the Rings",
              url: "",
            },
            {
              id: 7,
              name: "Blood Bowl",
              url: "",
            },
            {
              id: 8,
              name: "Titanicus",
              url: "",
            },
            {
              id: 9,
              name: "Warcry",
              url: "",
            },
            {
              id: 10,
              name: "Warhammer: Underworlds",
              url: "",
            },
            {
              id: 11,
              name: "Killtem",
              url: "",
            },
          ],
        },
        {
          id: 4,
          name: "Аксессуары для игр",
          url: "",
          subCategories: [
            {
              id: 1,
              name: "Альтернативные миниатюры",
              url: "",
            },
            {
              id: 2,
              name: "Warhammer 40k",
              url: "",
            },
            {
              id: 3,
              name: "Age of Sigmar",
              url: "",
            },
            {
              id: 4,
              name: "Warcry",
              url: "",
            },
            {
              id: 5,
              name: "Necromunda",
              url: "",
            },
            {
              id: 6,
              name: "Lord of the Rings",
              url: "",
            },
            {
              id: 7,
              name: "Blood Bowl",
              url: "",
            },
            {
              id: 8,
              name: "Titanicus",
              url: "",
            },
            {
              id: 9,
              name: "Warcry",
              url: "",
            },
            {
              id: 10,
              name: "Warhammer: Underworlds",
              url: "",
            },
            {
              id: 11,
              name: "Killtem",
              url: "",
            },
          ],
        },
        {
          id: 5,
          name: "Краски",
          url: "",
          subCategories: [
            {
              id: 1,
              name: "Альтернативные миниатюры",
              url: "",
            },
            {
              id: 2,
              name: "Warhammer 40k",
              url: "",
            },
            {
              id: 3,
              name: "Age of Sigmar",
              url: "",
            },
            {
              id: 4,
              name: "Warcry",
              url: "",
            },
            {
              id: 5,
              name: "Necromunda",
              url: "",
            },
            {
              id: 6,
              name: "Lord of the Rings",
              url: "",
            },
            {
              id: 7,
              name: "Blood Bowl",
              url: "",
            },
            {
              id: 8,
              name: "Titanicus",
              url: "",
            },
            {
              id: 9,
              name: "Warcry",
              url: "",
            },
            {
              id: 10,
              name: "Warhammer: Underworlds",
              url: "",
            },
            {
              id: 11,
              name: "Killtem",
              url: "",
            },
          ],
        },
        {
          id: 6,
          name: "Товары для игр",
          url: "",
          subCategories: [
            {
              id: 1,
              name: "Альтернативные миниатюры",
              url: "",
            },
            {
              id: 2,
              name: "Warhammer 40k",
              url: "",
            },
            {
              id: 3,
              name: "Age of Sigmar",
              url: "",
            },
            {
              id: 4,
              name: "Warcry",
              url: "",
            },
            {
              id: 5,
              name: "Necromunda",
              url: "",
            },
            {
              id: 6,
              name: "Lord of the Rings",
              url: "",
            },
            {
              id: 7,
              name: "Blood Bowl",
              url: "",
            },
            {
              id: 8,
              name: "Titanicus",
              url: "",
            },
            {
              id: 9,
              name: "Warcry",
              url: "",
            },
            {
              id: 10,
              name: "Warhammer: Underworlds",
              url: "",
            },
            {
              id: 11,
              name: "Killtem",
              url: "",
            },
          ],
        },
        {
          id: 7,
          name: "Аксессуары для моделизма",
          url: "",
          subCategories: [
            {
              id: 1,
              name: "Альтернативные миниатюры",
              url: "",
            },
            {
              id: 2,
              name: "Warhammer 40k",
              url: "",
            },
            {
              id: 3,
              name: "Age of Sigmar",
              url: "",
            },
            {
              id: 4,
              name: "Warcry",
              url: "",
            },
            {
              id: 5,
              name: "Necromunda",
              url: "",
            },
            {
              id: 6,
              name: "Lord of the Rings",
              url: "",
            },
            {
              id: 7,
              name: "Blood Bowl",
              url: "",
            },
            {
              id: 8,
              name: "Titanicus",
              url: "",
            },
            {
              id: 9,
              name: "Warcry",
              url: "",
            },
            {
              id: 10,
              name: "Warhammer: Underworlds",
              url: "",
            },
            {
              id: 11,
              name: "Killtem",
              url: "",
            },
          ],
        },
      ],
      catalog: {
        links: [
          {
            id: 1,
            name: "Каталог",
            url: "",
          },
          {
            id: 2,
            name: "Wharhammer",
            url: "",
          },
          {
            id: 3,
            name: "Magic:the Cathering",
            url: "",
          },
          {
            id: 4,
            name: "Мероприятия",
            url: "",
          },
          {
            id: 5,
            name: "О центре",
            url: "",
          },
          {
            id: 6,
            name: "Контакты",
            url: "",
          },
        ],
        icons: [
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
      },
      categoriesSelected: {
        isSelected: false,
        name: "",
        categories: [],
      },
    };
  },
  methods: {
    categoryOpener(event) {
      const category = event.target.closest("#category");

      if (category.open) {
        category.open = false;
      } else {
        this.$refs.categories.querySelectorAll("#category").forEach((el) => {
          el.open = false;
        });
        category.open = true;
      }
    },
    mobileMenuOpener: function () {
      window.scrollTo(0, 0);
      this.isMobileMenuOpened = !this.isMobileMenuOpened;
      this.isMobileMenuOpened
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "visible");
    },
    srcFixer(src) {
      return require(`@/assets/${src}`);
    },
    subCategoryOpener: function (name, subCategory) {
      this.categoriesSelected.isSelected = true;
      this.categoriesSelected.name = name;
      this.categoriesSelected.categories = subCategory;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply flex flex-col font-trebuchet font-bold;
  @apply TL:items-center;
  & .header-main {
    @apply w-full h-18 flex justify-between items-center bg-project-black px-5 z-20;
    @apply TM:justify-evenly;
    @apply TM:z-10;
    @apply TL:max-w-6xl TL:justify-between;
    &::before {
      @apply w-full h-18 absolute left-0 top-0 bg-project-black -z-1;
      content: "";
    }
    & .mobile-menu-opener-wrapper {
      @apply w-px-18 h-4 absolute cursor-pointer;
      @apply TS:w-5;
      @apply TM:hidden;
      &::before {
        @apply w-full absolute bg-white transition-all duration-300;
        content: "";
        height: 2.25px;
        transform: translateY(1px);
      }
      & .opener {
        @apply w-full absolute bg-white transition-all duration-300;
        content: "";
        height: 2.25px;
        transform: translateY(6.5px);
      }
      &::after {
        @apply w-full absolute bg-white transition-all duration-300;
        content: "";
        height: 2.25px;
        transform: translateY(12px);
      }
    }
    & .mobile-menu {
      @apply w-67 h-128 absolute top-18 left-0 bg-white pt-5 pb-7 overflow-y-scroll z-10;

      & .categories {
        @apply flex flex-col justify-between mb-12;
        & #category {
          &[open] {
            & .category-summary {
              &::before {
                transform: translateX(100%) !important;
              }

              & .arrow {
                @apply opacity-100;
              }
            }
          }
          &:not([open]) {
            & .category-summary:hover {
              & .arrow {
                @apply LS:opacity-70;
              }
            }
          }
          & .category-summary {
            @apply w-full h-11 flex items-center px-8 transition-colors duration-300;
            &::before {
              @apply w-full h-11 absolute right-full  bg-project-orange transition-transform duration-300;
              content: "";
            }
            & .summary-text {
              @apply flex flex-col items-start select-none cursor-pointer z-10;
              &::after {
                @apply w-0 border-t-2 border-black transition-all duration-300;
                content: "";
              }
              &:hover {
                &::after {
                  @apply LS:w-%25;
                }
              }
            }
            & .arrow {
              @apply absolute right-8 opacity-30 mt-1 cursor-pointer transition-opacity duration-300;
            }
          }
          & .sub-categories {
            @apply ml-12 my-5 cursor-pointer;
            & .sub-category {
              @apply mb-3 select-none transition-all duration-300;

              &:hover {
                @apply opacity-60;
              }
            }
          }
        }
      }
      & .links-wrapper {
        @apply h-36 flex flex-col justify-between px-8;
        &::before {
          @apply w-full h-0.5 absolute bg-project-gray -ml-8 -mt-8;
          content: "";
        }
        & .link {
          @apply self-start flex flex-col items-start select-none cursor-pointer;

          &::after {
            @apply w-0 border-t-2 border-black transition-all duration-300;
            content: "";
          }
          &:hover {
            &::after {
              @apply LS:w-1/2;
            }
          }
        }
      }
    }
    & .search-wrapper {
      @apply w-%40 h-14 relative hidden justify-center items-center bg-project-creamy -ml-5 px-5;
      @apply TM:flex;
      @apply TL:w-120;

      & .search-input {
        @apply w-full h-8.5 rounded-project-default border-1 border-white px-3 pr-9 outline-none z-10;
      }
      & .search-icon-wrapper {
        @apply absolute right-8  z-10;
      }
    }
    & .number-wrapper {
      @apply hidden justify-between -ml-10 cursor-pointer transition-opacity duration-300;
      @apply TM:flex;
      &:hover {
        @apply opacity-70;
      }
      & .icon {
        @apply w-6 mr-2;
        @apply TL:w-px-26;
      }
      & .number {
        @apply text-lg font-bold text-white;
      }
    }
    & .logo-wrapper {
      @apply w-30 ml-20 cursor-pointer transition-opacity duration-300;
      @apply MM:w-full MM:flex MM:justify-center MM:ml-10;
      @apply TM:w-30 TM:ml-0;
      @apply TL:w-38;
      &:hover {
        @apply opacity-70;
      }
      & .logo {
        @apply w-30;
        @apply TS:w-32;
        @apply TL:w-40;
      }
    }
    & .icons-wrapper {
      @apply w-14 flex justify-between -mt-0.5;
      & .user-icon-wrapper {
        @apply w-5 -mt-0.5 cursor-pointer transition-opacity duration-300;
        @apply MM:-ml-5;
        @apply TS:w-6;
        @apply TL:w-7;
        &:hover {
          @apply LS:opacity-70;
        }
      }
      & .basket-icon-wrapper {
        @apply w-5 relative cursor-pointer transition-opacity duration-300;
        @apply TS:w-6;
        @apply TL:w-7;
        &::before {
          @apply w-2.5 h-2.5 absolute -right-0.5 flex justify-center items-center rounded-full bg-project-orange font-bold text-white -mt-1;
          font-size: 8px;
          content: "1";
          @apply TL:w-3 TL:h-3 TL:-right-1;
        }
        &:hover {
          @apply LS:opacity-70;
        }
      }
    }
  }
  & .search-for-mobile {
    @apply w-full h-14 relative flex justify-center items-center bg-project-creamy px-5;
    @apply TM:hidden;

    & .search-input {
      @apply w-full h-9.5 rounded-project-default border-1 border-white px-3 pr-9 outline-none z-10;
    }
    & .search-icon-wrapper {
      @apply absolute right-8 z-10;
    }
  }
  & .catalog-for-pc {
    @apply w-full h-13 hidden;
    @apply TM:flex;
    @apply TL:justify-center;
    background: rgba(54, 54, 54, 0.04);

    & .catalog-main {
      @apply w-full relative flex justify-center items-center px-5;
      @apply TL:max-w-6xl TL:justify-between TL:px-5;
      & .catalog-opener {
        @apply w-4 h-3.5 absolute hidden -mt-0.5 -ml-228 cursor-pointer;
        @apply TM:block;
        @apply TL:ml-0;
        &::before {
          @apply w-full h-0.5 absolute bg-black transition-all duration-300;
          content: "";
          transform: translateY(1px);
        }
        & .opener {
          @apply w-full h-0.5 absolute bg-black transition-all duration-300;
          content: "";
          transform: translateY(6.5px);
        }
        &::after {
          @apply w-full h-0.5 absolute bg-black transition-all duration-300;
          content: "";
          transform: translateY(12px);
        }
      }
      & .links-wrapper {
        @apply flex self-center ml-7;
        & .link {
          @apply mr-10 cursor-pointer transition-opacity duration-300;
          @apply TL:mr-17;
          &:hover {
            @apply opacity-50;
          }
        }
      }
      & .icons-wrapper {
        @apply w-24 flex justify-between items-center;
        @apply TL:absolute TL:right-5;
        & .icon {
          & .icon-img {
            @apply cursor-pointer transition-opacity duration-300;
            &:hover {
              @apply opacity-70;
            }
          }
        }
      }
    }
    & .catalog-menu {
      @apply w-full absolute left-0 top-18 flex justify-center text-black z-20;

      & .catalog-menu-main {
        @apply relative flex bg-white font-bold pt-2;
        & .left {
          @apply border-r-2 border-project-gray mr-20;
          & .top {
            @apply flex items-center justify-start border-b-2 border-project-gray pl-7;
            height: 46px !important;
            & .catalog-closer {
              @apply w-4 h-3.5 absolute -mt-1 cursor-pointer z-20;
              @apply TM:block;
              &::before {
                @apply w-full h-0.5 absolute rounded-full bg-black transition-all duration-300;
                content: "";
                transform: translateY(6.5px) rotate(45deg);
              }
              &::after {
                @apply w-full h-0.5 absolute rounded-full bg-black transition-all duration-300;
                content: "";
                transform: translateY(6.5px) rotate(-45deg);
              }
              &:hover {
                &::before,
                &::after {
                  @apply bg-project-orange;
                }
              }
            }
            & .text {
              @apply flex flex-col items-start ml-7 cursor-pointer select-none;

              &::after {
                @apply w-0 border-t-2 border-black transition-all duration-300;
                content: "";
              }
              &:hover {
                &::after {
                  @apply LS:w-%30;
                }
              }
            }
          }
          & .bottom {
            @apply mb-11;
            & .category {
              @apply w-full relative flex items-center overflow-hidden;
              &::before {
                @apply w-full absolute right-full  bg-project-orange transition-transform duration-300;
                content: "";
                height: 46px;
              }
              & .name {
                @apply w-full relative flex flex-col justify-center items-start select-none pl-7;
                height: 46px;
              }
              & .arrow {
                @apply opacity-30 -ml-5 transition-opacity duration-300 z-10;
              }
            }
          }
        }
        & .categories-selected-name {
          @apply absolute left-69 top-5 flex flex-col items-start text-xl font-bold opacity-0 select-none cursor-pointer transition-all duration-700;

          &::after {
            @apply w-0 border-t-2 border-black transition-all duration-300;
            content: "";
            border-top: 2px black solid;
          }
          &:hover {
            &::after {
              @apply LS:w-%30;
            }
          }
        }
        & .right {
          @apply max-w-6xl flex flex-col flex-wrap mt-14 -ml-20 pr-14 pt-2;
          height: 250px;
          width: 70vw;
          @apply TL:h-48;
          & .sub-category {
            @apply ml-10 mb-0 cursor-pointer transition-opacity duration-300;
            flex: 0 1 40px;
            &:hover {
              @apply opacity-50;
            }
          }
        }
      }
    }
  }
  & .overlay {
    @apply w-screen h-screen fixed top-0 left-full bg-black opacity-0 transition-opacity duration-300 z-10;
  }
  & .pc-overlay {
    @apply h-screen fixed top-0 bg-black opacity-0 transition-opacity duration-300 z-10;
    width: 100vw;
    transform: translateX(100%);
  }
}

//Category
.category-selected {
  &::before {
    transform: translateX(100%);
  }
  & .arrow {
    opacity: 1 !important;
  }
}

.categories-selected-enter-active,
.categories-selected-leave-active {
  transition: all 1s;
}
.categories-selected-enter,
.categories-selected-leave-to {
  opacity: 0;
}

.category-menu-enter-active,
.category-menu-leave-active {
  transition: all 1s;
}
.category-menu-enter,
.category-menu-leave-to {
  transform: translateY(-120%) !important;
}

.category-opened-for-overlay {
  transform: translateX(0) !important;
  opacity: 0.6 !important;
}

.categories-selected-name-is-selected {
  opacity: 1 !important;
}

//For Mobile Menu
.mobile-opened {
  &::before {
    @apply rounded-full;
    transform: translateY(6.5px) rotate(45deg) !important;
    background-color: rgba(249, 164, 63) !important;
  }
  & .opener {
    transform: translateY(6.5px) scale(0) !important;
  }
  &::after {
    @apply rounded-full;
    transform: translateY(6.5px) rotate(-45deg) !important;
    background-color: rgba(249, 164, 63) !important;
  }
}
.menu-opened-for-overlay {
  transform: translateX(-100%);
  opacity: 0.3 !important;
}
.menu-enter,
.menu-leave-to {
  transform: translateX(-100%);
}
.menu-enter-active,
.menu-leave-active {
  @apply transition-all duration-300;
}
</style>
