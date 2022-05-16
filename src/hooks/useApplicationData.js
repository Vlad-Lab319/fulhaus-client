// import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  // useEffect(() => {
  //   Promise.all([

  //     axios.get(`https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6`,
  //     // axios.get(URL,

  //     // axios.get(`https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0`,
  //       // {
  //       //   // headers: { 'Access-Control-Allow-Origin': '*' }
  //       //   method: 'GET',
  //       //   mode: 'no-cors',
  //       //   headers: {
  //       //     'Access-Control-Allow-Methods': 'GET',
  //       //     'Access-Control-Allow-Origin': '*',
  //       //     // 'Accept': 'application/json',
  //       //     // 'Content-Type': 'application/json'
  //       //   },
  //       //   // withCredentials: true,
  //       //   // credentials: 'same-origin',
  //       //   crossDomain: true
  //       // }
  //     ),

  //   ])
  //     .then((all) => {
  //       setProducts(all[0].data.data.products);
  //     })
  //     .catch(err => console.log(err.message));
  // }, []);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6`
      );
      const products = await response.json();
      return products;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts()
    .then((all) => {
      // console.log('for rendering', all.data.products);
      setProducts(all.data.products);
    })
    .catch(err => console.log(err.message));
  }, []);



  const addToCart = id => {
    // cart.map(cartItem => {
    //   if (id !== cartItem._id) {

    //     products.map(product => {
    //       if (id === product._id) {
    //         setCart([
    //           ...cart,
    //           { _id: product._id, name: product.fulhausProductName, price: product.retailPrice }
    //         ]);
    //       }
    //       return product;
    //     })



    //     console.log("Not in a cart yet");
    //     return cartItem;
    //   } else {
    //     console.log("In cart already");
    //     return cartItem;    
    //   }
    // })

    products.map(product => {
      if (id === product._id) {
        setCart([
          ...cart,
          { _id: product._id, name: product.fulhausProductName, price: product.retailPrice, image: product.imageURLs[0] }
        ]);
      }
      return product;
    })
  };

  const removeFromCart = (id) => {
    const filteredCart = cart.filter(cartItem => cartItem._id !== id);
    console.log("Product to remove: ", id);
    console.log("new cart", filteredCart);
    setCart(filteredCart);
  };

  return {
    products,
    cart,
    addToCart,
    removeFromCart
  }
}