<template>
  <section id="color-gallery" v-if="colors.length > 0">
    <h2>pinned colors</h2>

    <ul>
      <li
        v-for="color in colors"
        :key="color.hex"
      >
        <span class="color-block" :style="{ backgroundColor: `#${color.hex}` }"></span>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'color-gallery',
    props: {
      colors: Array,
    },
    data() {
      return {
        editing: null,
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  #color-gallery {
    .color-block {
      @apply block w-1/5 aspect-square rounded-full shadow-sm bg-cream;
    }
  }
</style>