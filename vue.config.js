module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production' ? '/full-canvas/' : '/',
    css: {
        extract: false
    }
}
