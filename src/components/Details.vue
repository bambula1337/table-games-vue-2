<template>
  <div class="details-wrapper">
    <div class="details-main">
      <details class="details">
        <summary class="summary">
          Какие игры можете посоветовать новичку в настолках?
        </summary>
        <p class="description">
          В нашем магазине представлен огромный ассортимент игр на любой вкус,
          но конечно же есть бессмертная классика настольных игр. Если вы только
          начинаете свой игровой путь, то мы рекомендуем вам легендарную
          "Монополию", знаменитую игры для вечеринок под названием "Активити",
          самые распространенные в мире настольные стратегии "Каркассон" и
          "Колонизаторы", простую и веселую игру, от которой невозможно
          оторваться, <span class="orange">"Дженгу"</span>
        </p>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsComponent",
};
</script>

<style lang="scss" scoped>
.details-wrapper {
  @apply w-screen flex justify-center font-trebuchet mt-10;
  & .details-main {
    @apply relative w-full max-w-6xl flex justify-center flex-col px-5;
    & .details {
      &::after {
        content: "";
        height: 2.2px;
        @apply absolute left-0 bottom-0 w-full bg-gray-300;
      }
      & .summary {
        list-style: none;
        @apply text-lg font-bold mb-3 bg-none select-none cursor-pointer;
        &::-webkit-details-marker {
          display: none;
        }
      }
      & .description {
        @apply mb-4;

        & .orange {
          @apply font-bold text-project-orange cursor-pointer;
        }
      }
    }
  }
}
</style>
