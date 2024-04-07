import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { Fragment, useContext, useState } from 'react';
import CartItem from './CartItem';
import Checkout from './checkOut';
const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [didSubmit, setDidSubmit] = useState(false)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const [isOrder, serIsOrder] = useState(false)
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch("https://food-ordering-app-d7297-default-rtdb.firebaseio.com/order.json", {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderItem: cartCtx.items
      })

    })
    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.amount}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const handleOrder = () => {
    serIsOrder(true)
  }

  const modalAction = <div className={classes.actions} >
    <button className={classes['button--alt']} onClick={props.onClose}>
      Close
    </button>
    {hasItems && <button className={classes.button} onClick={handleOrder}>Order</button>}
  </div>

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrder && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {
        !isOrder && modalAction

      }
    </Fragment>
  )

  const isSubmittingModalContent =<p>Sending order data...</p>
  const didSubmitModalContent = <p>Succesfully sent the order...</p>
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
