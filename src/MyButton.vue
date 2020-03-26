<template>
  <div><button @click="increment">Count: {{ state.count }}</button></div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({

  setup () {
    const state = reactive({
      count: 0,
    })

    function increment () {
      state.count++
    }
    return {
      state, increment,
    }
  },
})

</script>

<style lang="scss" scoped>
</style>
