<template>
  <div class="catalog-item">
    <b-card :title="item.product_name" :img-alt="item.product_name" :img-src="item.photo" img-top>
      <b-card-text>
        <h5>{{ item.price }}$</h5>
      </b-card-text>
      <b-button @click="addItem(item)" variant="outline-success" class="text-uppercase">Add to bag</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CatalogItem",
  props: ["item"],
  methods: {
    ...mapActions("basket", ["addItem"])
  }
};
</script>