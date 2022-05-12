
export default function Product(props) {

  // const addToCartLocal = (id) => {
  //   console.log('Add to cart: ', id);

  // }

  return (

    <div className='card'>
      <img src={props.image} alt={props.name} className="product-img" />
      <div className="info">
        <div>

        <h1>{props.name}</h1>
        <p>
          {props.brandName}
          <br/>
          ${props.price}
        </p>
        </div>

        <button
          // onClick={() => addToCartLocal(props.id)}
          onClick={() => props.addToCart(props.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};