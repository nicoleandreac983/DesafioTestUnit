import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from "vue-router";

describe("HomeView", () => {
  test("Probando la existencia del componente o vista HomeView", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/home",
          name: "home",
          component: HomeView,
        },
      ],
    });
 
    router.push("/home");
    await router.isReady();
 
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    });
 
    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
  });
});

describe('Componente HomeView.vue', () => {
  test('Validacion de match con el snapshot', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

// snapshot de la estructura HTML del componente HomeView.vue

describe('Componente HomeView.vue', () => {
  test('Validar el texto de un botón de enviar formulario', () => {
    const wrapper = shallowMount(HomeView)
    const botonEnviar = wrapper.find('.boton')
    console.log(botonEnviar.text())
    expect(botonEnviar.text()).toBe('Enviar')
  })
})
