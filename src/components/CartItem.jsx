export default function Product(props) {

  // const removeFromCart = (id) => {
  //   console.log(id);
  // }

  return (
 

    <div className="cart-item">
      <h2>{props.name}</h2>
      {props.price}
      <img src={props.image} alt={props.name} className="cart-img" />
      <button
        // onClick={() => removeFromCart(props.id)}
        onClick={() => props.removeFromCart(props.id)}
      >
        Remove from cart
      </button>
    </div>
  );
};