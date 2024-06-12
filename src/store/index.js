import { createStore } from "vuex";
import userStore from "./UserStore";
import createPersistedState from "vuex-persistedstate";
import loadingStore from "./LoadingStore";

const store = createStore({
    modules: {
        user: userStore,
        loading: loadingStore
    },
    plugins: [
        createPersistedState({
            key: 'root',
            storage: window.sessionStorage, // 생략 시, localStorage
            paths: ['user']
        })  
    ]
});

export default store;