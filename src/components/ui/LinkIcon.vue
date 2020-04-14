<template>
  <div class="b-link-icon d-inline-block">
    <b-link @click="$emit('click')" v-b-hover="handleHover">
      <b-icon :icon="icon" :variant="isHovered ? hoverVariant : variant"></b-icon>
    </b-link>
  </div>
</template>

<script>
export default {
  name: "LinkIcon",
  props: ["icon", "variant", "hoverVariant"],
  event: ["click"],
  data() {
    return {
      isHovered: false
    };
  },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    },
  }
};
</script>