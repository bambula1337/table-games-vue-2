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
    <button-orange-default>
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
import ButtonOrangeDefault from "../Global/Buttons/ButtonOrangeDefault.vue";

export default {
  components: { ButtonOrangeDefault },
  name: "FormComponent",
  directives: {
    mask,
  },
};
</script>

<style lang="scss" scoped>
.form {
  @apply flex flex-col items-center font-trebuchet mt-8 px-5;
  & .main-text {
    @apply w-full font-bold mb-3.5;
    font-size: 21px;
  }
  & .inputs-wrapper {
    @apply w-full;
    & .input-wrapper {
      @apply w-full mb-4;
      & .input-text {
        @apply mb-1;
      }
      & .input {
        @apply w-full h-11 outline-none border-project-gray px-5 transition-colors duration-300;
        border-width: 1px;
        border-radius: 9px;

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
      @apply w-full h-22 resize-none outline-none border-project-gray px-5 pt-2 transition-colors duration-300;
      border-width: 1px;
      border-radius: 9px;
      &:focus {
        @apply border-black;
      }
      &::-webkit-scrollbar-track {
        @apply bg-project-gray mt-1.5 mb-1.5;
        border-radius: 30px;
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        border-radius: 30px;
      }
    }
  }
  & .button-text {
    @apply flex justify-center items-center text-white font-bold;
    height: 37px;
  }
  & .bottom-text {
    @apply text-sm mt-4;
    & .link {
      @apply underline;
    }
  }
}
</style>
