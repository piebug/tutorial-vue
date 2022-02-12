<template>
  <section id="color-gallery" v-if="colors.length > 0">
    <h2>pinned colors</h2>

    <ul class="flex flex-row flex-wrap justify-center">
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
    h2 {
      @apply text-3xl text-emerald-500 text-center font-display mb-4;
    }

    li {
      @apply block w-1/4 p-2 shrink-0;
    }

    .color-block {
      @apply block w-full aspect-square rounded-full shadow-sm bg-cream
        hover:shadow-md;
    }
  }
</style>