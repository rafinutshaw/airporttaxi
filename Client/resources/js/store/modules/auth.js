import axios from "axios";

const state = {
    loggedIn: false,
    user: {}
};
const getters = {
    authUser: state => state.user,
    isLoggedIn: state => state.loggedIn
};

const actions = {
    login({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post("/login", payload)
                .then(response => {
                    // console.log(response.data);

                    commit("login", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    register({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post("/register", payload)
                .then(response => {
                    commit("login", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};

const mutations = {
    login: (state, user) => {
        (state.user = user), (state.loggedIn = true);
    },

    logout: state => {
        (state.user = {}), (state.loggedIn = false);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
