<template>
  <div class="home">
    <div class="wrapper-default wrapper-shop-home-slider">
      <ShopHomeSlider :slides="slides" />
    </div>
    <div class="wrapper-default wrapper-shop-catalog">
      <ShopCatalog :categories="categories" />
    </div>
    <div class="wrapper-default">
      <div
        class="wrapper-shop-special"
        v-for="slider in sliders"
        :key="slider.id"
      >
        <ShopSpecial :mainText="slider.text" :slides="slider.slides" />
      </div>
    </div>
    <div class="wrapper-default wrapper-shop-events">
      <ShopEvents :cards="cards" />
    </div>
    <div class="wrapper-default wrapper-shop-interesting">
      <ShopInteresting :interesting="interesting" />
    </div>
    <div class="wrapper-default wrapper-shop-about">
      <ShopAbout />
    </div>
    <div class="wrapper-default wrapper-shop-contact">
      <ShopContact :contacts="contacts" />
    </div>
  </div>
</template>

<script>
// Components
import ShopHomeSlider from "@/components/ShopHomeSlider.vue";
import ShopCatalog from "@/components/ShopCatalog.vue";
import ShopSpecial from "@/components/ShopSpecial.vue";
import ShopEvents from "@/components/ShopEvents.vue";
import ShopInteresting from "@/components/ShopInteresting.vue";
import ShopAbout from "@/components/ShopAbout.vue";
import ShopContact from "@/components/ShopContact.vue";

// Vuex
import { mapActions, mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    ShopHomeSlider,
    ShopCatalog,
    ShopSpecial,
    ShopEvents,
    ShopInteresting,
    ShopAbout,
    ShopContact,
  },
  methods: {
    ...mapActions("home", [
      "getSlides",
      "getCategories",
      "getSliders",
      "getCards",
      "getInteresting",
      "getContacts",
    ]),
    loadData: function () {
      this.getSlides();
      this.getCategories();
      this.getSliders();
      this.getCards();
      this.getInteresting();
      this.getContacts();
    },
    lazyLoad: async function () {
      window.addEventListener(
        "load",
        () => {
          if ("IntersectionObserver" in window) {
            this.loadData();
            const components = this.$el.querySelectorAll(".wrapper-default");
            const observer = new IntersectionObserver(
              function (entries) {
                for (let entry of entries) {
                  if (!entry.isIntersecting) return;
                  entry.target.classList.add("opacityFULL");
                  observer.unobserve(entry.target);
                }
              },
              {
                threshold: "0",
              }
            );
            components.forEach((component) => {
              observer.observe(component);
            });
          }
        },
        false
      );
    },
  },
  computed: {
    ...mapState("home", {
      slides: (state) => state.slides,
      categories: (state) => state.categories,
      sliders: (state) => state.sliders,
      cards: (state) => state.cards,
      interesting: (state) => state.interesting,
      contacts: (state) => state.contacts,
    }),
  },
  created() {
    // this.loadData();
  },
  mounted() {
    this.lazyLoad();
    console.log("HomeView has been mounted");
  },
  beforeDestroy() {
    console.log("HomeView has been destroyed");
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply w-screen overflow-hidden;
  & .wrapper-default {
    @apply w-full mb-5 transition-all duration-1000 opacity-50;
  }

  & .wrapper-shop-home-slider {
    @apply TM:mb-8;
  }

  & .wrapper-shop-catalog {
    @apply mb-7;
    @apply TM:mb-20;
  }

  & .wrapper-shop-special {
    @apply -mb-2;
    @apply TM:mb-1;
  }

  & .wrapper-shop-events {
    @apply mt-2 mb-10;
    @apply TM:mb-20;
  }

  & .wrapper-shop-interesting {
    @apply mb-8;
    @apply TM:mb-20;
  }

  & .wrapper-shop-about {
    @apply mb-8;
    @apply TM:mb-20;
  }

  & .wrapper-shop-contact {
  }
}
.opacityFULL {
  opacity: 1 !important;
}
</style>
