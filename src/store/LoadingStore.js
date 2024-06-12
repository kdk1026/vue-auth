const loadingStore = {
    namespaced: true,
    state: () => ({
        isLoading: false
    }),
    mutations: {
        setIsLoading(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {
        setIsLoading(context, payload) {
            context.commit('setIsLoading', payload);
        }
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        }
    }
};

export default loadingStore;