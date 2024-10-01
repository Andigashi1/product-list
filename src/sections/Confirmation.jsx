import PropTypes from 'prop-types'

function Confirmation({ cartItems, handleConfirmation }) {

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='fixed z-10 inset-0 top-0 flex items-center max-sm:items-end justify-center'>
      <div className='bg-black inset-0 opacity-40 absolute'></div>
      <div className='z-50 bg-white max-w-lg w-full p-8 rounded-md'>
        <img src="/images/icon-order-confirmed.svg" alt="" />
        <h1 className="mb-2 mt-4 text-4xl font-bold max-sm:max-w-24">Order Confirmed</h1>
        <p className="text-gray-500 mb-8">We hope you enjoy your food!</p>

        <div className="bg-rose-100 rounded-md p-4 mb-4">

          <div className='max-h-72 overflow-scroll'>
            {cartItems.map(item => (
              <div key={item.id} className="flex border-b-1 border-gray-300 py-4">
                <img src={item.image.thumbnail} className="max-w-16 rounded-md"/>
                <div className="flex flex-col justify-between pl-4 py-1.5">
                  <p className="font-semibold">{item.name}</p>
                  <div className="flex text-sm">
                    <p className="text-primary-red font-semibold">{item.quantity}x</p>
                    <p className="ml-4 text-gray-500">@{item.price.toFixed(2)}</p>
                  </div>
                </div>
                  <p className="ml-auto font-semibold self-center">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <p>Order total:</p>
            <p className="font-bold text-xl">${totalPrice.toFixed(2)}</p>
          </div>
          
        </div>
          <button
          className="red-button" 
          onClick={handleConfirmation}>Start new order</button>
      </div>

    </div>
  )
}

Confirmation.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  handleConfirmation: PropTypes.func.isRequired
}

export default Confirmation