<template>
  <input 
    type="text"
    :value="modelValue"
    @input="checkInput"
  />
</template>

<script>
  export default {
    name: 'rgb-input',
    props: {
      modelValue: String,
    },
    methods: {
      checkInput(e) {
        let rgbInput = e.target.value
        const rgb = rgbInput.split(',').map(val => val.trim())

        // Clean up rgb input value and auto-add commas when relevant
        rgbInput = rgb.join(',')
        if (rgb.length < 3 && rgb[rgb.length - 1].length === 3) {
          rgbInput = `${rgbInput},`
        }
        this.$emit('update:modelValue', rgbInput)

        // Check that the rgb values are complete and valid for conversion
        if (!this.isInvalid(rgbInput) && rgb.length === 3) {
          this.$emit('use:rgb', rgbInput)
        } else {
          this.$emit('reset')
        }
      },
      isInvalid(rgb) {
        // Check that there are no more than 3 values
        const rgbArray = rgb.split(',')
        if (rgbArray.length > 3) {
          return true
        }

        // Check that each value is a number between 0 and 255
        let isInvalid = false
        rgbArray.forEach((val) => {
          const num = +val
          if (!num || num < 0 || num > 255) {
            isInvalid = true
            return
          }
        })

        return isInvalid
      },
    },
  }
</script>
