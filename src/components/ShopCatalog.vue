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
export default {
  name: "ShopCatalog",
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
  @apply w-full font-trebuchet px-5;
  @apply TM:max-w-6xl;
  @apply TL:px-5;

  & .main-text {
    @apply text-xl font-bold mb-2;
    @apply TS:text-3xl;
    @apply TM:mb-4;
    @apply TL:ml-0;
  }
  & .categories {
    @apply flex flex-col items-center;
    @apply TM:flex-row TM:justify-center;
    & .main-category {
      @apply w-full h-30 relative flex items-end overflow-hidden mb-4 rounded-project-default cursor-pointer;
      background-repeat: no-repeat !important;
      background-size: 100% !important;
      background-position: 0rem -2rem !important;
      @apply MM:max-w-md MM:h-42;
      @apply TS:h-54;
      @apply TM:h-76;
      @apply TL:max-w-lg TL:h-84;
      &::after {
        @apply w-full h-full absolute bg-black opacity-0 rounded-project-default transition-opacity duration-300;
        content: "";
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
        @apply w-full h-8.5 flex items-center font-bold text-white  bg-project-black rounded-b-project-default px-2 select-none z-10 transition-colors duration-300;
        @apply TS:text-lg;
      }
    }
    & .other-categories {
      @apply w-full flex flex-col items-center cursor-pointer;
      @apply ML:w-144 ML:flex-row ML:justify-around ML:items-center ML:flex-wrap;
      @apply TS:w-full TS:justify-evenly TS:px-5;
      @apply TM:w-128 TM:flex-row TM:justify-start TM:px-0;
      @apply TL:w-154;
      & .category {
        @apply w-full h-30 relative flex items-end mb-4 overflow-hidden rounded-project-default;
        background-size: 100% !important;
        background-position: 0rem -2rem !important;
        @apply MM:max-w-md MM:h-42;
        @apply ML:w-60 ML:h-36;
        @apply TS:w-72 TS:h-40;
        @apply TM:w-60 TM:h-36 TM:ml-4;
        @apply TL:w-70 TL:h-40;
        @screen MM {
          background-position: 0rem 0rem !important;
        }
        &::after {
          @apply w-full h-full absolute bg-black opacity-0 rounded-project-default transition-opacity duration-300;
          content: "";
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
          @apply w-full h-8.5 flex items-center font-bold text-white  bg-project-black px-2 z-10 rounded-b-project-default select-none transition-colors duration-300;
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
          @apply h-9 flex justify-center items-center text-base text-white;
        }
      }
    }
  }
}
</style>
