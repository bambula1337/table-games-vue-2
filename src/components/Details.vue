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
          оторваться, "Дженгу"
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
  @apply w-screen flex justify-center;
  & .details-main {
    @apply w-full max-w-6xl flex justify-center flex-col;
    & .details {
      & .summary {
        @apply bg-none select-none cursor-pointer;
        list-style: none;
        &::-webkit-details-marker {
          display: none;
        }
      }
      & .description {
      }
    }
  }
}
</style>
