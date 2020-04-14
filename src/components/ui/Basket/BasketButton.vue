<template>
  <div class="basket-button">
    <b-button variant="outline-light" id="basket-button" class="my-2">
      <b-icon :icon="count ? 'bag-fill' : 'bag'"></b-icon>
      <b-badge variant="light" class="ml-2" id="basket-badge">{{ count }}</b-badge>
    </b-button>
    <b-popover id="basket-popover" target="basket-button" title="Shopping Cart" placement="bottom">
      <BasketList :count="count" :amount="amount" :items="items" />
    </b-popover>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BasketList from "./BasketList";
export default {
  name: "BasketButton",
  components: {
    BasketList
  },
  computed: {
    ...mapState("basket", ["amount", "count", "items"])
  },
  methods: {
    ...mapActions("basket", ["getItems"])
  },
  created() {
    this.getItems();
  }
};
</script>
