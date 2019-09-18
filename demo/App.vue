<template>
    <main class="class">
        <p>Demo for <code>FullCanvas</code>:</p>
        <full-canvas ref="canvas" rect-throttle="20" />
    </main>
</template>

<script>
import FullCanvas from '../src/FullCanvas'

export default {
    components: {
        'full-canvas': FullCanvas
    },
    async mounted() {
        await this.$nextTick()

        this.render()
    },
    methods: {
        render() {
            const ctx = this.$refs.canvas.$el.getContext('2d')
            ctx.fillRect(100, 100, 100, 100)

            requestAnimationFrame(this.render)
        }
    }
}
</script>
