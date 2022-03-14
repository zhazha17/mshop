module.exports = {
  devServer: {
    port: 8080,
    open: true,
    proxy: 'https://localhost:4000'
  }
}
