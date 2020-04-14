<template>
  <div class="search-form">
    <b-nav-form>
      <b-form-input v-model="searchQuery" class="mr-2" placeholder="Search..."></b-form-input>
      <b-button
        @click.prevent="search(searchQuery)"
        variant="outline-success"
        type="submit"
        class="my-2"
      >Search</b-button>
    </b-nav-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchForm",
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    ...mapActions(["search"])
  }
};
</script>