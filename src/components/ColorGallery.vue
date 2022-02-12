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

            <button class="delete" @click="$emit('delete:color', color)">Delete</button>
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
      PopoverPanel,
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
      copy() {
        navigator.clipboard.writeText("Howdy, partner!");
      }
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
      @apply block w-full aspect-square rounded-full shadow-sm bg-cream hover:shadow-md;

      &.open {
        @apply ring ring-cream;
      }
    }

    .popover {
      @apply p-3 bg-cream shadow-lg rounded-xl grid grid-cols-1 font-sans;

      button.delete {
        @apply py-2 px-3 mt-1 rounded-2xl bg-rose-500 shadow-sm hover:shadow-md
          text-white font-display
          focus:ring focus:ring-rose-300 focus:ring-opacity-50
          active:bg-rose-600 active:shadow-sm;
      }
    }
  }
</style>