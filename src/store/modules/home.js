import axios from "axios";
import {
  SET_SLIDES,
  SET_CATEGORIES,
  SET_SLIDERS,
  SET_CARDS,
  SET_INTERESTING,
  SET_CONTACTS,
} from "@/store/mutation-types";

export const initialState = {
  slides: [],
  categories: {},
  sliders: [],
  cards: [],
  interesting: {},
  contacts: [],
};

export const mutations = {
  [SET_SLIDES](state, slides) {
    state.slides = slides;
  },
  [SET_CATEGORIES](state, categories) {
    state.categories = categories;
  },
  [SET_SLIDERS](state, sliders) {
    state.sliders = sliders;
  },
  [SET_CARDS](state, cards) {
    state.cards = cards;
  },
  [SET_INTERESTING](state, interesting) {
    state.interesting = interesting;
  },
  [SET_CONTACTS](state, contacts) {
    state.contacts = contacts;
  },
};

export const actions = {
  async getSlides({ commit }) {
    try {
      const slides = await axios.get("http://localhost:3000/slides");
      commit("home/SET_SLIDES", slides.data, { root: true });
    } catch (error) {
      console.log(error);
    }
  },
  async getCategories({ commit }) {
    try {
      const categories = await axios.get("http://localhost:3000/categories");
      commit("home/SET_CATEGORIES", categories.data, { root: true });
    } catch (error) {
      console.log(error);
    }
  },
  async getSliders({ commit }) {
    try {
      const sliders = await axios.get("http://localhost:3000/sliders");
      commit("home/SET_SLIDERS", sliders.data, { root: true });
    } catch (error) {
      console.log(error);
    }
  },
  async getCards({ commit }) {
    try {
      const cards = await axios.get("http://localhost:3000/cards");
      commit("home/SET_CARDS", cards.data, { root: true });
    } catch (error) {
      console.log(error);
    }
  },
  async getInteresting({ commit }) {
    try {
      const interesting = await axios.get("http://localhost:3000/interesting");
      commit("home/SET_INTERESTING", interesting.data, { root: true });
    } catch (error) {
      console.log(error);
    }
  },
  async getContacts({ commit }) {
    try {
      const contacts = await axios.get("http://localhost:3000/contacts");
      commit("home/SET_CONTACTS", contacts.data, { root: true });
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
};
