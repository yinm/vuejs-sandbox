<template>
  <div id="counter">
    <h1>Counter Comp</h1>
    <p>{{ cnt }}.sec</p>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    data() {
      return {
        cnt: 0
      }
    },
    beforeMount() {
      setInterval(() => {
        this.cnt++
      }, 1000)
    }
  }
</script>
