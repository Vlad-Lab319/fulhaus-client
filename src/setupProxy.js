const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
  app.use(
    createProxyMiddleware('/dog',
    {
      target: `https://dog.ceo/api/breeds/image/random`,
      changeOrigin: true
    })
  )
}