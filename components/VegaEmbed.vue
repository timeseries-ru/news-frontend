<template>
  <div ref="view" style="overflow: hidden;" class="vega">
  </div>
</template>

<script>
import vegaEmbed from 'vega-embed'

export default {
  props: ['spec'],
  data () {
    return {
      vegaMounted: false
    }
  },
  mounted () {
    this.mountVegaEmbed()
    window.addEventListener('resize', this.updater)
  },
  beforeDestroy () {
    this.destroyVegaEmbed()
    window.removeEventListener('resize', this.updater)
  },
  watch: {
    spec () {
      this.destroyVegaEmbed()
      this.mountVegaEmbed()
    }
  },
  methods: {
    async mountVegaEmbed () {
      this.wrap = this.$refs.view
      this.vegaEmbedObject = await vegaEmbed(this.wrap, {
        ...this.spec,
        width: this.wrap.offsetWidth,
        autosize: 'fit'
      }, {
        renderer: 'svg',
        hover: true
      })
      this.view = this.vegaEmbedObject.view

      setTimeout(this.updater, 100)
    },
    destroyVegaEmbed () {
      if (this.view) {
        this.view.finalize()
      }
    },
    async updater () {
      const margin = 38
      if (this.wrap) {
        await this.view
          .width(this.wrap.offsetWidth - margin)
          .height((this.wrap.offsetWidth - margin) / this.spec.width * this.spec.height)
          .runAsync('enter')
      }
    }
  }
}
</script>

<style scoped>
.vega {
  width: calc(100% - 38px);
  height: 100%;
}
</style>