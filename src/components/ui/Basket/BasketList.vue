<template>
  <div class="basket-list">
    <b-list-group v-if="count">
      <b-list-group-item v-for="item in items" :key="item.id_product">
        <BasketItem :item="item" />
      </b-list-group-item>
      <b-list-group-item>
        <BasketItem :item="subtotal" bold="true" readonly="true"/>
      </b-list-group-item>
    </b-list-group>
    <h6 v-else class="font-weight-bold">Shopping Cart is empty</h6>
  </div>
</template>

<script>
import BasketItem from "./BasketItem";
export default {
  name: "BasketList",
  components: {
    BasketItem
  },
  props: ["items", "amount", "count"],
  computed: {
    subtotal() {
      return { product_name: "Sub-total", quantity: this.count, price: this.amount };
    }
  }
};
</script>