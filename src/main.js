import App from './App.vue'
import _App from './_App';
import { createSSRApp, defineAsyncComponent } from 'vue'
import { createRouter } from './router'
import { createStore } from './store';
import { registerDynamicComponents } from './utils';

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.

const __components = [
  {
      name: 'something',
      template: '<template><div>something cool</div></template>'
  },
  {
      name: 'cooler',
      template: '<template><div><b>COOLER</b><dynamic-something/></div></template>'
  }
];

export function createApp() {
  const app = createSSRApp(_App)
  const router = createRouter()
  const store = createStore();
  
  registerDynamicComponents(__components, app);
  
  app.use(router)
  app.use(store);
  
  return { app, router, store }
}
