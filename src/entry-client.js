import { createApp } from './main'
import { getMatchedComponents } from './utils';

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.beforeResolve((to, from, next) => {
  const Components = getMatchedComponents(to, [])

  const asyncDataFuncs = Components.map((component) => {
    const asyncData = component.asyncData || null;
    if (asyncData) {
      const config = {
        store,
        route: to
      };
      return asyncData(config);
    }
  });
  try {
    Promise.all(asyncDataFuncs).then(() => {
      next();
    });
  } catch (err) {
    next(err);
  }
})
router.afterEach((to) => {
  try {
    const layout = to.matched[0].components.default.layout;
    store.commit('config/setLayout', layout);  
  } catch {
    // TODO
  }
})
// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
})
