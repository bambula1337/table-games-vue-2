<template>
  <div class="about">
    <div class="about-main">
      <p class="main-text">Об игровом центре</p>
      <div class="right">
        <img :src="srcFixer('images/about/about_1.jpg')" alt="" class="photo" />
        <p class="sub-text">
          «GoldFish» - магазин, в котором Вы можете купить отличный подарок как
          для себя, так и для своих близких.
          <br class="br" />
          В ассортименте нашего магазина представлены тысячи настольных игр на
          любой вкус: простые и посложнее, семейные и только для взрослых, для
          двоих и для больших компаний, детективные и логические, ролевые и
          стратегические настолки. «GoldFish» также регулярно проводит
          собственные игротеки:турниры по Magic: the Gathering (от компании
          Wizards of the coast) и Warhammer (от Games Workshop).
          <br class="br" />
          В нашем магазине можно найти нужные аксессуары для любимых игр
          (протекторы для карт и коллекций), инструменты для самостоятельного
          оформления и покраски фигурок (кейсы, подставки, краски Vallejo и др.)
          и многое другое.
          <br class="br" />
          «GoldFish» - это не только магазин настольных игр, но и полноценный
          хобби-центр. Здесь можно арендовать столы для игр с друзьями,
          проходить обучение и мастер-классы по интересующим тебя играм,
          заводить новые знакомства и приобщаться к игровому комьюнити!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopAbout",
  methods: {
    srcFixer(src) {
      return require(`@/assets/${src}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  @apply flex justify-center;
  & .about-main {
    @apply w-full flex flex-col items-center font-trebuchet px-5;
    @apply TM:px-10;
    @apply TL:max-w-6xl TL:px-5;
    & .main-text {
      @apply self-start text-xl font-bold mb-4;
      @apply TS:text-3xl;
      @apply TL:mb-7;
    }
    & .right {
      @apply TM:w-full TM:flex TM:flex-row-reverse;
      & .photo {
        @apply mb-4 rounded-project-default;
        @apply MM:w-80;
        @apply ML:w-88;
        @apply TM:w-220 TM:h-%80;
        @apply TL:w-260 TL:h-%105 TL:-mt-14;
      }
      & .sub-text {
        @apply w-72;
        @apply MM:w-80;
        @apply ML:w-88;
        @apply TM:w-full TM:mr-10;
        & .br {
          @apply block mt-5;
          content: "";
        }
      }
    }
  }
}
</style>
