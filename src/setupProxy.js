const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
  // app.use(
  //   createProxyMiddleware('/dog',
  //   {
  //     target: `https://dog.ceo/api/breeds/image/random`,
  //     changeOrigin: true
  //   })
  // ),

  app.use(
    createProxyMiddleware('/products',
    {
      // target: `https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6`,
      target: `https://fh-api-dev.herokuapp.com/api/products-service/products/website/`,
      changeOrigin: true
    })
  )
}