
<template>
  <div id="app">
    <AppHeader :searchItems="searchItems" />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    searchItems() {
      return this.$route.path == "/catalog";
    }
  }
};
</script>
