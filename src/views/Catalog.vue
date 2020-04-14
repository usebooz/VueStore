<template>
  <main class="catalog py-5 my-5">
    <CatalogList :items="filteredItems" />
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CatalogList from "../components/ui/Catalog/CatalogList.vue";
export default {
  name: "Catalog",
  components: {
    CatalogList
  },
  computed: {
    ...mapGetters("catalog", ["filteredItems"])
  },
  methods: {
    ...mapActions("catalog", ["getItems"])
  },
  created() {
    this.getItems();
  }
};
</script>

