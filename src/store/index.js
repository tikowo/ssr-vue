import { createStore as vuexCreateStore, useStore as vuexUseStore } from "vuex"

import config from "./modules/config"
import placeholder from "./modules/placeholder";

export const createStore = () => {
    const store = vuexCreateStore({
        strict: true,
        modules: {
            config: config(),
            placeholder: placeholder()
        }
    })

    return store;
}

export const useStore = () => {
    return vuexUseStore();
}

