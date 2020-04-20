<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import HelloWorld from './HelloWorld.vue'

// const HelloWorld = (): any => import('./HelloWorld.vue')

@Component({

})
export default class App extends Vue {
  async mounted () {
    const test = await this.test()
    // eslint-disable-next-line no-console
    console.log(test)
  }

  render () {
    // @ts-ignore
    return (
      <div>
        <HelloWorld msg={'World 123'} />
        <br />
        {this.renderStuff()}
      </div>
    )
  }

  private renderStuff () {
    return (
      <div>Render Stuff</div>
    )
  }

  private async test () {
    return 132
  }
}
</script>
