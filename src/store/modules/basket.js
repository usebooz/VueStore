import vuestore from '../../api/vuestore'

// states
const state = {
    amount: 0,
    count: 0,
    items: [],
}

// getters
const getters = {}

// actions
const actions = {
    async getItems({ commit }) {
        await vuestore.getBasket(basket => commit('setItems', basket));
    },
    async addItem({ commit }, newItem) {
        await vuestore.addToBasket(
            newItem,
            item => commit('pushItem', item),
            alert => commit('setAlert', alert, { root: true })
        );
    },
    async delItem({ commit }, delItem) {
        await vuestore.delFromBasket(
            delItem,
            item => commit('popItem', item),
            alert => commit('setAlert', alert, { root: true })
        );
    },
    async delItems({ dispatch }, delItem) {
        while (state.items.find(item => item.id_product == delItem.id_product)) {
            await dispatch('delItem', delItem);
        }
    },
}

// mutations
const mutations = {
    setItems(state, basket) {
        state.items = basket.contents;
        state.count = basket.countGoods;
        state.amount = basket.amount;
    },
    pushItem(state, newItem) {
        try {
            state.items.find(item => item.id_product == newItem.id_product).quantity++;
        } catch {
            state.items.push({ ...newItem, quantity: 1, });
        }
        state.amount += newItem.price;
        state.count++;
    },
    popItem(state, delItem) {
        state.items.find(item => item.id_product == delItem.id_product).quantity--;
        state.items = state.items.filter(item => item.quantity);
        state.amount -= delItem.price;
        state.count--;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}