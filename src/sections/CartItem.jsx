import { FiX } from "react-icons/fi";
import PropTypes from 'prop-types'

function CartItem({ item, removeItem }) {

    const subTotal = item.price * item.quantity


  return (

    <div className="flex justify-between items-center py-4 border-b-2 text-sm">
        <div>
            <p className="font-semibold">{item.name}</p>
            
            <div className="flex gap-4 mt-1">
                <p className="text-primary-red font-semibold">{item.quantity}x</p>
                <p className="text-gray-400">@ ${item.price.toFixed(2)}</p>
                <p className="text-gray-500 font-semibold">${subTotal.toFixed(2)}</p>
            </div>
        </div>

        <button 
        onClick={() => removeItem(item.id)}
        className="p-1 cursor-pointer rounded-full border-2 border-gray-400 text-gray-400 hover:border-black
        hover:text-black">
              <FiX size={14}/>
        </button>
        
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  removeItem: PropTypes.func.isRequired
}

export default CartItem