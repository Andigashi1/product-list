import CartItem from "./CartItem";
import PropTypes from 'prop-types'

function Cart({ cartItems, removeItem, handleConfirmation }) {

  const filteredCarts = cartItems.filter(item => item.quantity > 0)

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-md max-w-96 max-sm:max-w-md min-w-80 w-screen flex-1">

      <h2 className="text-primary-red font-bold text-2xl mb-4">Your Cart({totalItems})</h2>
      
      {filteredCarts && cartItems.length ? (
        <div>
          {filteredCarts.map(item => (
            <CartItem 
            key={item.id}
            item={item}
            removeItem={removeItem} />
          ))}
          
          <div className="flex justify-between items-center my-4">
            <p className="text-sm">Order Total:</p>
            <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>

          <div className="flex justify-center items-center bg-rose-100 p-3 mb-4 rounded-md ">
            <img src="/images/icon-carbon-neutral.svg" alt="" />
            <p>This is a carbon neutral delivery</p>
          </div>

          <button
          onClick={handleConfirmation} 
          className="red-button">
            Confirm Order
          </button>

        </div>

      ) : (
        <div className="">
        <img 
        className="mx-auto"
        src="/images/illustration-empty-cart.svg" alt="empty cart" />
        <p className="text-center text-xs font-medium text-rose-500 mb-4">Your added items will appear here</p>
        </div>
      )
      
      }

    </div>
  )
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
  handleConfirmation: PropTypes.func.isRequired
}

export default Cart