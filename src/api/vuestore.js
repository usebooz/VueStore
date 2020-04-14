import Vue from 'vue'

export default {
    async getCatalog(setCatalog) {
        let response = await fetch(`${Vue.Constants.API.STORE + Vue.Constants.API_REQUEST.CATALOG}`);
        if (response.status == 200) {
            setCatalog(await response.json());
            return;
        }
    },
    async getBasket(setBasket) {
        let response = await fetch(`${Vue.Constants.API.STORE + Vue.Constants.API_REQUEST.BASKET}`);
        if (response.status == 200) {
            setBasket(await response.json());
            return;
        }
    },
    async addToBasket(item, pushItem, setAlert) {
        let response = await fetch(`${Vue.Constants.API.STORE + Vue.Constants.API_REQUEST.ADD_TO_BASKET}`);
        if (response.status == 200) {
            pushItem(item);
            setAlert({ type: "success", text: "Product have added to cart" });
            return;
        }
    },
    async delFromBasket(item, popItem, setAlert) {
        let response = await fetch(`${Vue.Constants.API.STORE + Vue.Constants.API_REQUEST.DELETE_FROM_BASKET}`);
        if (response.status == 200) {
            popItem(item);
            setAlert({ type: "danger", text: "Product have deleted from cart" });
            return;
        }
    }
}