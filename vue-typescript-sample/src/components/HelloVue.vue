<template>
  <div>
    <h1>Hello {{ value | convertUpperCase }}</h1>
    <input type="text" :value="inputValue" @input="handleInput($event)" />
    <button @click="handleClick()" :disabled="isDisabled">button</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'

@Component({
  filters: {
    convertUpperCase(value: string): string | null {
      if (!value) return null
      return value.toUpperCase()
    },
  },
})

export default class HelloVue extends Vue {
  @Prop() private val!: string

  @Emit('handle-click')
  clickButton(val: string): void {}

  @Watch('value')
  onValueChange(newValue: string, oldValue: string): void {
    console.log(`watch: ${newValue}, ${oldValue}`)
  }

  value: string = this.val
  inputValue: string = ''

  // lifecycle hook
  mounted(): void {
    console.log('mounted')
  }

  // computed
  get isDisabled(): boolean {
    return this.inputValue === ''
  }

  // methods
  handleInput($event: any): void {
    this.inputValue = $event.target.value
  }
  handleClick(): void {
    if (this.inputValue === '') {
      return
    }
    this.value = this.inputValue
    this.inputValue = ''
    this.clickButton(this.value)
  }
}
</script>

<style scoped lang="scss">
</style>
