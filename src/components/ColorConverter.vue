<template>
  <section id="color-converter">
    <div class="color-block" :style="colorStyle"></div>

    <form>
      <label class="block">
        <span>HEX</span>
        <hex-input
          v-model="color.hex"
          @use:hex="getRgb" 
          @reset="resetRgb"
        />
      </label>

      <label class="block">
        <span>RGB</span>
        <rgb-input
          v-model="color.rgb"
          @use:rgb="getHex" 
          @reset="resetHex"
        />
      </label>

      <button>Pin</button>
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
    },
  }
</script>

<style scoped lang="scss">
  #color-converter {
    .color-block {
      @apply w-4/5 mx-auto aspect-square rounded-full shadow-md 
        outline outline-1 outline-gray-200 border-2 border-white;
      background-color: #FCF6EE;
      border-color: #FCF6EE;
    }

    form {
      @apply grid grid-cols-1 gap-4;
    }

    button {
      @apply py-2 rounded-full border-2 border-violet-500;
    }

    input {
      @apply mt-1 block w-full rounded-full border-gray-200 shadow-sm 
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50;
      background-color: #FCF6EE;
    }
  }
</style>
