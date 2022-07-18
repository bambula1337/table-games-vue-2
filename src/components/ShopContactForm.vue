<template>
  <div class="form">
    <p class="main-text">Остались вопросы?</p>
    <div class="inputs-wrapper">
      <div class="input-wrapper">
        <p class="input-text">Ваше имя</p>
        <input type="text" class="input" placeholder="Имя" />
      </div>
      <div class="input-wrapper">
        <p class="input-text">Ваш телефон</p>
        <input
          type="tel"
          v-mask="['+7 ### #######']"
          class="input"
          placeholder="+7 ___ _______"
        />
      </div>
    </div>
    <div class="text-area-wrapper">
      <p class="text-area-text">Ваш комментарий</p>
      <textarea
        class="text-area"
        placeholder="Комментарий"
        maxlength="200"
      ></textarea>
    </div>
    <button-orange-default class="button">
      <p class="button-text">Заказать звонок</p>
    </button-orange-default>
    <p class="bottom-text">
      Нажимая на кнопку "Заказать звонок", я даю
      <span class="link"> согласие на обработку персональных данных. </span>
    </p>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  name: "ShopContactForm",
  directives: {
    mask,
  },
};
</script>

<style lang="scss" scoped>
.form {
  @apply flex flex-col items-center font-trebuchet mt-8 px-5;
  @apply MM:max-w-md;
  @apply TS:max-w-none;
  & .main-text {
    @apply w-full font-bold mb-3.5 text-xl;
  }
  & .inputs-wrapper {
    @apply w-full;
    & .input-wrapper {
      @apply w-full mb-4;
      & .input-text {
        @apply mb-1;
      }
      & .input {
        @apply w-full h-11 outline-none border-project-gray px-5 transition-colors duration-300 border-1 rounded-project-default;
        &:focus {
          @apply border-black;
        }
      }
    }
  }
  & .text-area-wrapper {
    @apply w-full mb-2.5;
    & .text-area-text {
      @apply mb-1;
    }
    & .text-area {
      @apply w-full h-22 resize-none outline-none border-project-gray px-5 pt-2 border-1 rounded-project-default transition-colors duration-300;
      &:focus {
        @apply border-black;
      }
      &::-webkit-scrollbar {
        width: 0.4vw;
      }
      &::-webkit-scrollbar-track {
        @apply bg-transparent mt-1.5 mb-1.5 rounded-full;
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        @apply rounded-full;
      }
    }
  }
  & .button {
    @apply TM:w-full;
    & .button-text {
      @apply h-9 flex justify-center items-center text-white font-bold;
    }
  }
  & .bottom-text {
    @apply text-sm mt-4;
    & .link {
      @apply underline;
    }
  }
}
</style>
