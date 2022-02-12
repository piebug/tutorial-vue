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
            <div class="color-value">
              <p>#{{ color.hex }}</p>

              <button 
                class="copy" 
                @click="copy(color.hex)"
              >
                Copy
              </button>
            </div>

            <div class="color-value">
              <p>{{ color.rgb.split(',').join(', ') }}</p>

              <button 
                class="copy" 
                @click="copy(color.rgb)"
              >
                Copy
              </button>
            </div>

            <button class="delete" @click="$emit('remove:color', color)">Remove</button>
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
    methods: {
      copy(text) {
        navigator.clipboard.writeText(text);
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
        @apply py-2 px-3 mt-1 rounded-full bg-rose-500 shadow-sm hover:shadow-md
          text-white font-display
          focus:ring focus:ring-rose-300 focus:ring-opacity-50
          active:bg-rose-600 active:shadow-sm;
      }
    }

    .color-value {
      @apply flex flex-row justify-between mb-1
        border border-violet-200 rounded-full;

      p,
      button.copy {
        @apply py-2 px-3;
      }

      button.copy {
        @apply border-l border-violet-200 rounded-r-full hover:bg-violet-100;
      }
    }
  }
</style>