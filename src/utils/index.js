import { compile, defineAsyncComponent } from "vue"

export function getMatchedComponents(route, matches = false, prop = 'components') {
    return Array.prototype.concat.apply([], route.matched.map((m, index) => {
        return Object.keys(m[prop]).map((key) => {
            matches && matches.push(index)
            return m[prop][key]
        })
    }))
}

export function applyAsyncData(Component, asyncData) {
    if(Component.__hasAsyncData) {
        return
    }

    const ComponentData = Component._originalDataFn || Component.data || function() { return {} }

    Component.data = function () {
      const _data = ComponentData.call(this, this)
      return {..._data, ...asyncData }
    }
    Component.__hasAsyncData = true;
}

// CHGITEEEEm
export function registerDynamicComponents(Components, app) {
    const components = [];
    Components.forEach(component => {
        const _component = defineAsyncComponent(() => new Promise((resolve, reject) => {
            resolve({
                render: compile(component.template)
            })
        }));
        app.component(`dynamic-${component.name}`, _component)
    });
}