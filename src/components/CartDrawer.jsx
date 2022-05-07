import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useState } from "react";
import CartItem from './CartItem';

export default function CartDrawer(props) {

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const cartList = props.cart.map(cartItem =>
    <CartItem
      key={cartItem._id}
      id={cartItem._id}
      name={cartItem.name}
      price={cartItem.price}
      image={cartItem.image}
      removeFromCart={props.removeFromCart}
    />);

  const cartTotal = props.cart.reduce((sum, item) => sum + item.price, 0);


  return (
    <div className="cart-drawer">
      <Button
        onClick={toggleDrawer('right', true)}
        sx={{
          width: 70,
          background: '#000',
          color: '#fff',
        }}
      >
        Cart
      </Button>
      <SwipeableDrawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
        sx={{
          minWidth: "300px",

        }}
      >
        {cartList}
        <div className="cart-total">
          Total ${cartTotal}
        </div>
      </SwipeableDrawer>
    </div>

  );
};