<template>
  <section id="color-converter">
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
        }
      }
    },
    methods: {
      resetRgb() {
        this.color.rgb = ''
      },
      resetHex() {
        this.color.hex = ''
      },
      async getRgb(hex) {
        try {
          const response = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
          const data = await response.json()
          this.color.rgb = `${data.rgb.r},${data.rgb.g},${data.rgb.b}`
        } catch (error) {
          console.error(error)
        }
      },
      async getHex(rgb) {
        try {
          const response = await fetch(`https://www.thecolorapi.com/id?rgb=${rgb}`)
          const data = await response.json()
          this.color.hex = data.hex.clean
        } catch (error) {
          console.error(error)
        }
      },
    },
  }
</script>

<style scoped>

</style>
