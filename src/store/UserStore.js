const userStore = {
    namespaced: true,
    state: () => ({
        userInfo: {} 
    }),
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
        removeUserInfo(state) {
            state.userInfo = {};
        }
    },
    actions: {
        setUserInfo(context, payload) {
            context.commit('setUserInfo', payload);
        },
        removeUserInfo(context) {
            context.commit('removeUserInfo');
        }
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo;
        }
    }
};

export default userStore;