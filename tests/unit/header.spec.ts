import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  const appName = "Movies application";
  let localVue: any;
  let vuetify: any;
  let router: any;
  let wrapper: Wrapper<Header>;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    router = new VueRouter();
    wrapper = mount(Header, {
      localVue,
      router,
      vuetify,
      propsData: { appName }
    });
  });
  it("renders Header with application name", () => {
    expect(wrapper.text()).toMatch(appName);
  });
  it("has link with home path", () => {
    const link = wrapper.find("a").element;
    expect(link.getAttribute("href")).toBe("#/");
  });
});
