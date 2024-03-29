<template>
  <section id="color-converter">
    <div class="color-block" :style="colorStyle"></div>

    <form @submit.prevent="pinColor">
      <label class="block">
        <span class="label">HEX</span>
        <hex-input
          v-model="color.hex"
          @use:hex="getRgb" 
          @reset="resetRgb"
        />
      </label>

      <label class="block">
        <span class="label">RGB</span>
        <rgb-input
          v-model="color.rgb"
          @use:rgb="getHex" 
          @reset="resetHex"
        />
      </label>

      <button type="submit" :disabled="!color.hex || !color.rgb">Pin</button>
    </form>
  </section>
</template>

<script>
  import HexInput from './HexInput.vue'
  import RgbInput from './RgbInput.vue'

  export default {
    name: 'color-converter',
    components: {
      HexInput,
      RgbInput,
    },
    data() {
      return {
        color: {
          hex: '',
          rgb: '',
        },
        colorStyle: {
          backgroundColor: '',
        },
      }
    },
    methods: {
      resetRgb() {
        this.color.rgb = ''
        this.colorStyle.backgroundColor = ''
      },
      resetHex() {
        this.color.hex = ''
        this.colorStyle.backgroundColor = ''
      },
      async getRgb(hex) {
        try {
          const response = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
          const data = await response.json()

          this.color.rgb = `${data.rgb.r},${data.rgb.g},${data.rgb.b}`
          this.colorStyle.backgroundColor = data.hex.value
        } catch (error) {
          console.error(error)
        }
      },
      async getHex(rgb) {
        try {
          const response = await fetch(`https://www.thecolorapi.com/id?rgb=${rgb}`)
          const data = await response.json()

          this.color.hex = data.hex.clean
          this.colorStyle.backgroundColor = data.hex.value
        } catch (error) {
          console.error(error)
        }
      },
      pinColor() {
        this.$emit('pin:color', this.color)

        this.color.hex = ''
        this.color.rgb = ''
        this.colorStyle.backgroundColor = ''
      },
    },
  }
</script>

<style scoped lang="scss">
  #color-converter {
    .color-block {
      @apply w-3/5 m-auto aspect-square rounded-full shadow-sm bg-cream;
    }

    form {
      @apply mt-4 grid grid-cols-1 gap-4;
    }

    button {
      @apply py-2 mt-4 rounded-full bg-violet-500 shadow-sm hover:shadow-md
        text-white text-xl font-display
        focus:ring focus:ring-violet-300 focus:ring-opacity-50
        active:bg-violet-600 active:shadow-sm;

      &:disabled {
        @apply bg-violet-400 shadow-none hover:shadow-none;
      }
    }

    input {
      @apply px-4 block w-full rounded-full border-violet-100 shadow-sm bg-cream
        focus:border-violet-300 focus:ring focus:ring-violet-300 focus:ring-opacity-50 
        focus:bg-violet-50 focus:text-purple-600
        text-purple-900 text-2xl tracking-wider font-sans;

      &.has-error {
        @apply text-rose-500 bg-rose-50 
          focus:border-rose-300 focus:ring focus:ring-rose-300;
      }
    }

    .label {
      @apply px-4 text-lg font-display text-emerald-500;
    }
  }
</style>
