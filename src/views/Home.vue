<template>
  <main class="home py-4 my-4">
    <b-carousel :interval="3000" controls indicators>
      <b-carousel-slide
        caption="Ноутбук"
        img-src="https://picsum.photos/1280/590/?image=180"
        text="Lorem ipsum dolor sit amet."
      >
        <b-button to="/catalog" variant="outline-dark" class="text-uppercase">Go to Catalog</b-button>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Мышка"
        img-src="https://picsum.photos/1280/590/?image=201"
        text="Cras in accumsan metus, eget."
      >
        <b-button to="/catalog" variant="outline-dark" class="text-uppercase">Go to Catalog</b-button>
      </b-carousel-slide>
    </b-carousel>
  </main>
</template>

<script>
export default {
  name: "Home"
};
</script>
