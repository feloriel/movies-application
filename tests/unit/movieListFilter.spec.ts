import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Vuex from "vuex";
import MoviesListFilter from "@/components/movies/MoviesListFilter.vue";

describe("MovieListFilter.vue", () => {
  let localVue: any;
  let vuetify: any;
  let router: any;
  let wrapper: Wrapper<MoviesListFilter>;
  let state: any;
  let store: any;
  function mountWrapper() {
    wrapper = mount(MoviesListFilter, {
      localVue,
      router,
      vuetify,
      store
    });
  }

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    router = new VueRouter();
    state = {
      selectedGenre: ""
    };
    store = new Vuex.Store({
      state
    });
    mountWrapper();
  });
  it("updates input value with selectedGenre", () => {
    const input = wrapper.find(`input[type="hidden"`)
      .element as HTMLInputElement;
    expect(input.value).toBe("");
    state.selectedGenre = "comedy";
    mountWrapper();
    expect(
      (wrapper.find(`input[type="hidden"`).element as HTMLInputElement).value
    ).toBe("comedy");
  });
});
