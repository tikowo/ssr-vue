import { h, Suspense } from 'vue';
import { RouterView } from 'vue-router';

const _layouts = import.meta.globEager('./layouts/*.vue');
const layouts = {};

Object.keys(_layouts).forEach(path => {
    const name = path.match(/\.\/layouts\/(.*)\.vue$/)[1].toLowerCase()
    layouts[name] = _layouts[path].default;
})

export default {
    render() {
        const layoutName = this.$store.state.config.layout;

        const routerView = h(RouterView, {}, {
            default({ Component }) {
                return [
                    h(Suspense, {}, {
                        default() {
                            return [
                                Component
                            ]
                        }
                    })
                ]
            }
        })
        const CurLayout = layouts[layoutName] || layouts["default"];
        
        const layoutEl = h(CurLayout, {}, {
            default() {
                return [
                    routerView
                ]
            }
        });
        
        const template = h('div', {
            domProps: {
                id: '__layout'
            },
            key: layoutName
        }, [layoutEl])

        return template;
    },
}