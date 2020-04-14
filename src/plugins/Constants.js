import Vue from 'vue'

const Constants = {
    install(Vue) {
        Vue.Constants = {
            API: {
                STORE: "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/",
            },
            API_REQUEST: {
                CATALOG: "catalogData.json",
                BASKET: "getBasket.json",
                ADD_TO_BASKET: "addToBasket.json",
                DELETE_FROM_BASKET: "deleteFromBasket.json",
            }
        };
    }
};

Vue.use(Constants)