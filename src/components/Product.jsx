

export default function Product(props) {

  return (
    <div>
      <h2>{props.name}</h2>
      {props.brandName}
      {props.price}
      
      <img src={props.image} alt="" />
    </div>
  );
};