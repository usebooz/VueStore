<template>
  <header class="app-header fixed-top">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand to="/">
        <img
          src="../../assets/logo.png"
          class="d-inline-block align-top"
          alt="Logo"
          id="brand-logo"
        />
        VueStore
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="nav" class>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/catalog">Catalog</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-3">
          <b-search-form v-if="searchItems" class="ml-4" />
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <BasketButton />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-alert
      v-model="alertSecs"
      :variant="alertType"
      dismissible
      fade
      @dismissed="hideAlert()"
    >{{ alertText }}</b-alert>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SearchForm from "../ui/SearchForm";
import BasketButton from "../ui/Basket/BasketButton";
export default {
  name: "AppHeader",
  components: {
    BasketButton,
    "b-search-form": SearchForm
  },
  props: ["searchItems"],
  data() {
    return {
      alertSecs: 0
    };
  },
  computed: {
    ...mapState(["alertText", "alertType"])
  },
  watch: {
    alertText(newText) {
      this.alertSecs = newText ? 3 : 0;
    }
  },
  methods: {
    ...mapActions(["hideAlert"])
  }
};
</script>