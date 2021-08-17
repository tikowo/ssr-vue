export default () => {
    const config = {
        namespaced: true,
        state: {
            posts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.posts = posts;
            }
        }
    }

    return config;
}