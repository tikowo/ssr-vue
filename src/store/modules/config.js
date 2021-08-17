export default () => {
    const config = {
        namespaced: true,
        state: {
            layout: 'default'
        },
        mutations: {
            setLayout(state, layout) {
                state.layout = layout;
            }
        }
    }

    return config;
}