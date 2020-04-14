<template>
  <div class="basket-item d-flex justify-content-between align-items-center">
    <h6 class="m-0">
      <span :class="bold ? 'font-weight-bold mr-2' : 'mr-2'">{{ item.product_name }}</span>
      <b-link-icon
        @click="delItem(item)"
        icon="dash"
        variant="dark"
        hover-variant="danger"
        v-if="!readonly"
      />
      <b-badge variant="dark" class="mx-1">{{ item.quantity }}</b-badge>
      <b-link-icon
        @click="addItem(item)"
        icon="plus"
        variant="dark"
        hover-variant="success"
        v-if="!readonly"
      />
    </h6>
    <h6 class="my-0 ml-5">
      <span :class="readonly ? 'mr-3' : 'mr-1'">{{ item.price }}$</span>
      <b-link-icon @click="delItems(item)" icon="trash" variant="dark" hover-variant="danger" v-if="!readonly" />
    </h6>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LinkItem from "../LinkIcon";
export default {
  name: "BasketItem",
  components: {
    "b-link-icon": LinkItem
  },
  props: ["item", "bold", "readonly"],
  methods: {
    ...mapActions("basket", ["addItem", "delItem", "delItems"])
  }
};
</script>