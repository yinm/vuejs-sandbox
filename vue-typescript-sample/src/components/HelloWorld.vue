<template>
  <div>
    <h1>Hello {{ value | convertUpperCase }}</h1>
    <input type="text" :value="inputValue" @input="handleInput($event)" />
    <button @click="handleClick()" :disabled="isDisabled">button</button>
  </div>
</template>

<script>
export default {
  name: 'hello-vue',

  props: ['val'],

  data() {
    return {
      value: this.val,
      inputValue: '',
    }
  },

  mounted() {
    console.log('mounted')
  },

  computed: {
    isDisabled() {
      return this.inputValue === ''
    },
  },

  methods: {
    handleInput($event) {
      this.inputValue = $event.target.value
    },

    handleClick() {
      if (this.inputValue === '') {
        return
      }
      this.value = this.inputValue
      this.inputValue = ''

      this.$emit('handle-click', this.value)
    },
  },

  watch: {
    value(newValue, oldValue) {
      console.log(`watch: ${newValue}, ${oldValue}`)
    },
  },

  filters: {
    convertUpperCase(value) {
      if (!value) return
      return value.toUpperCase()
    },
  },
}
</script>

<style scoped>
</style>
