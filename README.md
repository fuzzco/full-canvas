Auto-resizing canvas. [Demo](https://fuzzco.github.io/full-canvas/)

`npm i @fuzzco/full-canvas`

[Register component in Vue](https://vuejs.org/v2/guide/components-registration.html), then:

```html
<template>
    <main>
        <!-- canvas that resizes to fit its container (positions: absolute, top/right/bottom/left: 0) -->
        <full-canvas />

        <!-- lower rect-throttle value for smoother resizing, at the cost of more expensive calculations -->
        <full-canvas rect-throttle="20" />
    </main>
</template>
```

## Options

| Prop            | Type             | Default | Notes                                      |
| --------------- | ---------------- | ------- | ------------------------------------------ |
| `rect-throttle` | [String, Number] | 150     | How often the canvas resizes itself, in ms |
