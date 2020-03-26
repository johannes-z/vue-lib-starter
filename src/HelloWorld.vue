<template>
  <div>Hello {{ msg }}!</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class HelloWorld extends Vue {
  @Prop() msg!: string
}
</script>

<style lang="scss" scoped>
</style>
