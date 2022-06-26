<template>
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
        <div class="all-catalog">
          <button-orange-default>
            <p class="catalog-text">{{ catalog.text }}</p>
          </button-orange-default>
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
          background: `url(${require("@/assets/images/catalog/categories_1.jpg")})`,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  @apply px-5 font-trebuchet;
  & .main-text {
    @apply font-bold mb-2;
    font-size: 21px;
  }
  & .categories {
    & .main-category {
      @apply w-full h-30 relative flex items-end mb-4 overflow-hidden;
      background-repeat: no-repeat !important;
      border-radius: 9px;
      background-position: 0rem -2rem !important;
      background-size: 100% !important;
      &::after {
        @apply w-full h-30 absolute bg-black opacity-0 transition-opacity duration-300;
        content: "";
        border-radius: 9px;
      }
      &:hover::after {
        @apply LS:opacity-20;
      }
      & .main-category-name {
        @apply w-full flex items-center text-white font-bold  bg-project-black px-2 select-none;
        height: 34px;
        border-radius: 0 0 9px 9px;
      }
    }
    & .other-categories {
      & .category {
        @apply w-full h-30 relative flex items-end mb-4 overflow-hidden;
        background-repeat: no-repeat !important;
        border-radius: 9px;
        background-position: 0rem -2rem !important;
        background-size: 100% !important;
        &::after {
          @apply w-full h-30 absolute bg-black opacity-0 transition-opacity duration-300;
          content: "";
          border-radius: 9px;
        }
        &:hover::after {
          @apply LS:opacity-20;
        }
        & .category-name {
          @apply w-full flex items-center text-white font-bold  bg-project-black px-2 select-none;
          height: 34px;
          border-radius: 0 0 9px 9px;
        }
      }
      & .all-catalog {
        @apply flex justify-center;
        & .catalog-text {
          @apply flex justify-center items-center text-base text-white;
          height: 37px;
        }
      }
    }
  }
}
</style>
