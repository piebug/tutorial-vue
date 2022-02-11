<template>
  <input 
    type="text"
    :value="modelValue"
    @input="checkInput"
  />
</template>

<script>
  export default {
    name: 'hex-input',
    props: {
      modelValue: String,
    },
    methods: {
      checkInput(e) {
        let hexInput = e.target.value

        // Ignore initial "#" in hex value
        if (hexInput.startsWith('#')) {
          hexInput = hexInput.replace('#', '')
        }
        this.$emit('update:modelValue', hexInput)

        // Check that the hex is valid and complete enough for conversion
        if (!this.isInvalid(hexInput) && (hexInput.length === 3 || hexInput.length === 6)) {
          this.$emit('use:hex', hexInput)
        } else {
          this.$emit('reset')
        }
      },
      isInvalid(hex) {
        return !/^[0-9a-f]{1,6}$/i.test(hex)
      },
    },
  }
</script>
