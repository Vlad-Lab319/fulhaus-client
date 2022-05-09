import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useState } from "react";
import CartItem from './CartItem';
import { autocompleteClasses } from '@mui/material';

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

  const handleCheckout = () => {
    console.log("Checkout");
  }

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
          width: 100,
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
      >
        <div className="cart">

          {cartList}
          <div className="cart-total">
            Total ${cartTotal}
          </div>
          <Button
            onClick={handleCheckout}
            sx={{
              marginTop: 2,
              width: 100,
              background: '#000',
              color: '#fff',
            }}
          >
            Checkout
          </Button>
        </div>
      </SwipeableDrawer>
    </div>

  );
};