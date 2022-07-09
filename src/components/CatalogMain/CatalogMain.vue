<template>
  <div class="catalog-wrapper">
    <div class="catalog">
      <p class="main-text">Каталог</p>
      <div class="categories">
        <div class="main-category" :style="categories.categoryMain.style">
          <p class="main-category-name">
            {{ categories.categoryMain.name }}
          </p>
        </div>
        <div class="other-categories">
          <div
            class="category"
            v-for="category in categories.categoryOthers"
            :key="category.id"
            :style="category.style"
          >
            <p class="category-name">
              {{ category.name }}
            </p>
          </div>
          <div class="category catalog-pc" :style="catalog.style">
            <p class="category-name">{{ catalog.text }}</p>
          </div>
          <div class="all-catalog">
            <button-orange-default>
              <p class="catalog-text">{{ catalog.text }}</p>
            </button-orange-default>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonOrangeDefault from "../Global/Buttons/ButtonOrangeDefault.vue";
export default {
  components: { ButtonOrangeDefault },
  name: "CatalogMain",
  data() {
    return {
      categories: {
        categoryMain: {
          name: "Настольные игры",
          style: {
            background: `url(${require("@/assets/images/catalog/categories_main.jpg")})`,
          },
        },
        categoryOthers: [
          {
            id: 1,
            name: "Варгеймы",
            style: {
              background: `url(${require("@/assets/images/catalog/categories_1.jpg")})`,
            },
          },
          {
            id: 2,
            name: "Magic:the Cathering",
            style: {
              background: `url(${require("@/assets/images/catalog/categories_2.jpg")})`,
            },
          },
          {
            id: 3,
            name: "Краски",
            style: {
              background: `url(${require("@/assets/images/catalog/categories_3.jpg")})`,
            },
          },
        ],
      },
      catalog: {
        text: "Весь каталог",
        style: {
          background: `url(${require("@/assets/images/catalog/catalog.jpg")})`,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.catalog-wrapper {
  @apply w-full flex flex-col items-center;
}
.catalog {
  @apply w-full px-5 font-trebuchet;
  @apply TM:max-w-6xl;
  @apply TL:px-5;

  & .main-text {
    @apply font-bold mb-2;
    font-size: 21px;
    @apply TS:text-3xl;
    @apply TM:mb-4;
    @apply TL:ml-0;
  }
  & .categories {
    @apply flex flex-col items-center;
    @apply TM:flex-row TM:justify-center;
    & .main-category {
      @apply w-full h-30 relative flex items-end mb-4 overflow-hidden cursor-pointer;
      background-repeat: no-repeat !important;
      border-radius: 9px;
      background-position: 0rem -2rem !important;
      background-size: 100% !important;
      @apply MM:h-42 MM:max-w-md;
      @apply TS:h-54;
      @apply TM:h-76;
      @apply TL:max-w-lg TL:h-84;
      &::after {
        @apply w-full h-full absolute bg-black opacity-0 transition-opacity duration-300;
        content: "";
        border-radius: 9px;
      }
      &:hover {
        &::after {
          @apply LS:opacity-20;
        }
        & .main-category-name {
          @apply text-project-orange;
        }
      }
      & .main-category-name {
        @apply w-full flex items-center text-white font-bold  bg-project-black px-2 select-none z-10 transition-colors duration-300;
        height: 34px;
        border-radius: 0 0 9px 9px;
        @apply TS:text-lg;
      }
    }
    & .other-categories {
      @apply flex flex-col items-center w-full cursor-pointer;
      @apply ML:flex-row ML:flex-wrap ML:justify-around ML:items-center ML:w-144;
      @apply TS:w-full TS:px-5 TS:justify-evenly;
      @apply TM:flex-row TM:justify-start TM:px-0 TM:w-128;
      @media (min-width: 1280px) {
        width: 615px;
      }
      & .category {
        @apply w-full h-30 relative flex items-end mb-4 overflow-hidden;
        background-repeat: no-repeat !important;
        border-radius: 9px;
        background-position: 0rem -2rem !important;
        background-size: 100% !important;
        @apply MM:h-42 MM:max-w-md;
        @apply ML:w-60 ML:h-36;
        @apply TS:w-72 TS:h-40;
        @apply TM:w-60 TM:h-36 TM:ml-4;
        @apply TL:w-70 TL:h-40;
        @media (min-width: 480px) {
          background-position: 0rem 0rem !important;
        }
        &::after {
          @apply w-full h-full absolute bg-black opacity-0 transition-opacity duration-300;
          content: "";
          border-radius: 9px;
        }
        &:hover {
          &::after {
            @apply LS:opacity-20;
          }
          & .category-name {
            @apply text-project-orange;
          }
        }
        & .category-name {
          @apply w-full flex items-center text-white font-bold  bg-project-black px-2 select-none transition-colors duration-300 z-10;
          height: 34px;
          border-radius: 0 0 9px 9px;
        }
      }
      & .catalog-pc {
        @apply hidden;
        @apply ML:flex;
      }
      & .all-catalog {
        @apply flex justify-center;
        @apply ML:hidden;
        & .catalog-text {
          @apply flex justify-center items-center text-base text-white;
          height: 37px;
        }
      }
    }
  }
}
</style>
