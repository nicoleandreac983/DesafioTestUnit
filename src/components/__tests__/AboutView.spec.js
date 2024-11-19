import {describe, test, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import { shallowMount } from '@vue/test-utils'
describe("AboutView", () => {
    test("Probando la existencia del componente o vista AboutView", async () => {
      const router = createRouter({
        history: createWebHistory(),
        routes: [
          {
            path: "/about",
            name: "about",
            component: AboutView,
          },
        ],
      });
   
      router.push("/about");
      await router.isReady();
   
      const wrapper = mount(AboutView, {
        global: {
          plugins: [router],
        },
      });
   
      expect(wrapper.findComponent(AboutView).exists()).toBe(true);
    });
  });


//crear el snapshot
describe('Componente AboutView.vue', () => {
    test('Validacion de match con el snapshot', () => {
      const wrapper = shallowMount(AboutView)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
// snapshot de la estructura HTML del componente AboutView.vue
describe('AboutView', () => {
    const wrapper = shallowMount(AboutView);
    it('should have the correct title', () => {
        expect(wrapper.find('h1').text()).toBe('Soy un ABOUT!');
    });
});
