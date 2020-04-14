<template>
  <div class="catalog-list">
    <b-container fluid>
      <b-row>
        <b-col lg="3" md="6" sm="12" class="py-3" v-for="item in items" :key="item.id_product">
          <CatalogItem :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem";
export default {
  name: "CatalogList",
  components: {
    CatalogItem
  },
  props: ["items"]
};
</script>