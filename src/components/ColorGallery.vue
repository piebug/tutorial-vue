<template>
  <section id="color-gallery" v-if="colors.length > 0">
    <h2>pinned colors</h2>

    <ul class="flex flex-row flex-wrap justify-center">
      <li
        v-for="color in colors"
        :key="color.hex"
      >
        <Popover v-slot="{ open }">
          <PopoverButton 
            class="color-block" 
            :class="{ 'open': open }"  
            :style="{ backgroundColor: `#${color.hex}` }"
          ></PopoverButton>

          <PopoverPanel class="popover absolute z-10">
            <p>{{ color.hex }}</p>
            <p>{{ color.rgb }}</p>
          </PopoverPanel>
        </Popover>
      </li>
    </ul>
  </section>
</template>

<script>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

  export default {
    name: 'color-gallery',
    components: { 
      Popover, 
      PopoverButton, 
      PopoverPanel 
    },
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
      @apply block w-1/4 p-2 shrink-0 hover:p-1;
    }

    .color-block {
      @apply block w-full aspect-square rounded-full shadow-sm bg-cream
        hover:shadow-md;

      &.open {
        @apply ring ring-cream;
      }
    }
  }
</style>