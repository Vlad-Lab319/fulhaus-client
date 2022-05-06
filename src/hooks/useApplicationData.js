import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6`),
    ])
    .then((all) => {
      setProducts(all[0].data.data.products);
      // console.log(all);
    })
    .catch(err => console.log(err.message));
  }, []);
  
  // console.log(products);
  return {
    products,
  }
}