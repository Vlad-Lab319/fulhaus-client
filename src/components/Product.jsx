import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Product(props) {

  // const addToCartLocal = (id) => {
  //   console.log('Add to cart: ', id);

  // }

  return (

    // <Card sx={{
    //   maxWidth: 500
    // }}>
    //   <CardActionArea>
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {props.name}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {props.brandName}
    //       </Typography>
    //     </CardContent>
    //     <CardMedia
    //       component="img"
    //       height="auto"
    //       image={props.image}
    //       alt={props.name}
    //     />
    //     ${props.price}
    //   </CardActionArea>
    //   <CardActions>
    //     <Button
    //       size="small"
    //       color="primary"
    //       onClick={addToCartLocal(props.id)}
    //       >
    //       Add to cart
    //     </Button>
    //   </CardActions>
    // </Card>

    <div>
      <h2>{props.name}</h2>
      {props.brandName}
      {props.price}

      <img src={props.image} alt={props.name} className="product-img" />
      <button
        // onClick={() => addToCartLocal(props.id)}
        onClick={() => props.addToCart(props.id)}
      >
        Add to cart
      </button>
    </div>
  );
};