<template>
  <section id="color-converter">
    <form>

      <label class="block">
        <span>HEX</span>
        <input 
          ref="first"
          type="text"
          v-model="color.hex"
          @input="checkHexInput"
        />
      </label>

      <label class="block">
        <span>RGB</span>
        <input 
          type="text"
          v-model="color.rgb"
          @input="checkRGBInput"
        />
      </label>

      <button>Pin</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'color-converter',
    data() {
      return {
        color: {
          hex: '',
          rgb: '',
        }
      }
    },
    methods: {
      checkHexInput(e) {
        const hexInput = e.target.value

        if (hexInput.length === 3) {
          this.getRGB(hexInput)
        } else if (hexInput.length === 6) {
          this.getRGB(hexInput)
        } else {
          this.color.rgb = ''
        }
      },
      checkRGBInput(e) {
        const rgbInput = e.target.value
        const rgb = rgbInput.split(',').map(val => val.trim())

        if (rgb.length === 3) {
          this.getHex(rgb.join(','))
        } else if (rgb[rgb.length - 1].length === 3) {
          this.color.rgb = `${rgbInput},`
          this.color.hex = ''
        } else {
          this.color.hex = ''
        }
      },
      async getRGB(hex) {
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
  form {
    @apply grid grid-cols-1 gap-4;
  }

  label > span {
    @apply text-sm uppercase font-bold;
  }

  input[type="text"],
  input[type="email"] {
    @apply mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 
      focus:ring-0 focus:border-stone-400 focus:bg-stone-50;
  }

  button {
    @apply py-2 border-2 border-stone-400 font-bold
      focus:bg-stone-400 focus:border-stone-400 focus:text-white
      hover:bg-stone-500 hover:border-stone-500 hover:text-white;
  }
</style>
