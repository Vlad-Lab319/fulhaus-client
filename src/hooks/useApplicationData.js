import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // const [dog, setDog] = useState(['https://images.dog.ceo/breeds/terrier-fox/n02095314_2609.jpg']);

  const url = `https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6`;
  const urlProxyServer = `https://vlad-profile-server.herokuapp.com/products`;

  const axiosOptions = {
    method: 'GET',
    // mode: 'no-cors',
    headers: {
      // 'Access-Control-Allow-Methods': 'GET',
      // 'Access-Control-Allow-Origin': '*',
    //   // 'Accept': 'application/json',
    //   // 'Content-Type': 'application/json'
    },
    // withCredentials: true,
    // // credentials: 'same-origin',
    // // crossDomain: true
  }


  useEffect(() => {
    Promise.all([

      axios.get(
        // url,
        urlProxyServer,
        `/products`,
        axiosOptions
      ),
      // axios.get(
      //   // `https://dog.ceo/api/breeds/image/random`,
      //   `/dog`,
      //   axiosOptions
      // )

    ])
      .then((all) => {
        // console.log('All: ', all);
        // console.log('Products: ', all[0].data.data.products); // Fulhaus dev API object data
        // console.log('Products: ', all[0].data.API);
        // setProducts(all[0].data.data.products); // Fulhaus dev API object data
        setProducts(all[0].data.API); // Proxy server data
        // console.log('Dog: ', all[1].data.message);
        // setDog(all[1].data.message);
      })
      .catch(err => console.log(err.message));
  }, []);


  const fetchOptions = {
    method: 'GET',
    // mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': 'Content-Type, Authorization',
    },

  }

  async function fetchProducts() {
    try {
      const response = await fetch(
        url,
        fetchOptions
      );
      const products = await response.json();
      return products;
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   fetchProducts()
  //   .then((all) => {
  //     // console.log('for rendering', all.data.products);
  //     setProducts(all.data.products);
  //   })
  //   .catch(err => console.log(err.message));
  // }, []);



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
          // { _id: product._id, name: product.name, price: product.retailPrice, image: product.image } // proxy server data
          { _id: product._id, name: product.name, price: product.retailPrice, image: product.imageURLs[0] } // fulhaus data
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
    // dog,
    addToCart,
    removeFromCart
  }
}