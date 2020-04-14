import vuestore from '../../api/vuestore'

// states
const state = {
    items: [],
}

// getters
const getters = {
    filteredItems: (state, getters, rootState) => {
        return state.items.filter(item => new RegExp(rootState.searchQuery, 'i').test(item.product_name));
    }
}

// actions
const actions = {
    async getItems({ commit }) {
        await vuestore.getCatalog(items => commit('setItems', items))
    }
}

// mutations
const mutations = {
    setItems(state, items) {
        state.items = items;
        state.items[0].photo = "https://picsum.photos/720/720/?image=180";
        state.items[1].photo = "https://picsum.photos/720/720/?image=201";
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}