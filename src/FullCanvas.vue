<template>
    <canvas
        class="full-canvas"
        :width="clientRect ? clientRect.width * dpi : 0"
        :height="clientRect ? clientRect.height * dpi : 0"
        ref="canvas"
    />
</template>

<script>
import _throttle from 'lodash/throttle'

export default {
    props: {
        rectThrottle: {
            type: [Number, String],
            default: 150
        }
    },
    data() {
        return {
            clientRect: null,
            dpi: 1
        }
    },
    async mounted() {
        this.dpi = window.devicePixelRatio
        window.addEventListener(
            'scroll',
            _throttle(this.setRect, this.rectThrottle)
        )
        window.addEventListener(
            'resize',
            _throttle(this.setRect, this.rectThrottle)
        )
        await this.$nextTick()

        this.setRect()

        await this.$nextTick()
        this.$emit('canvas-ready', this.$refs.canvas)
    },
    methods: {
        setRect() {
            if (this.$el && this.$el.getBoundingClientRect)
                this.clientRect = this.$el.getBoundingClientRect()
        }
    }
}
</script>

<style lang="scss">
.full-canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
