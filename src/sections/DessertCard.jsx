import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function DessertCard({desserts, onAddToCart, onRemoveCart, cartItems}) {

  const [ isMobile, setIsMobile ] = useState(false) 

  const cartItem = cartItems.find(item => item.id === desserts.id)
  const quantity = cartItem ? cartItem.quantity : 0

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 640 )
    }

    checkWidth()
    window.addEventListener("resize", checkWidth)

    return () => window.removeEventListener("resize", checkWidth)
  }, [])

  return (
    <div className="">
        <div className='relative flex flex-col justify-center items-center mb-6'>
          
          <img className={`rounded-md border-2 ${quantity ? 'border-2 border-primary-red': null}`} 
           src={isMobile ? desserts.image.mobile : desserts.image.desktop}
           alt={desserts.name} />

            <div className="absolute -bottom-4 max-w-40 w-full">
              {quantity ? (
                <div className="w-full rounded-full border-1  bg-primary-red text-white py-1 px-4 flex flex-1 justify-between items-center">
                  <button
                  className="border-2 rounded-full p-1 hover:bg-white hover:text-primary-red"
                  onClick={() => onRemoveCart(desserts)}>
                    <FaMinus size={10}/>
                  </button>
                  {quantity}
                  <button
                  className="border-2 rounded-full p-1 hover:bg-white hover:text-primary-red"
                  onClick={() => onAddToCart(desserts)}>
                    <FaPlus size={10}/>
                  </button>
                </div>
              ) : (
              <button className="w-full rounded-full border-1 border-gray-400 py-1 px-4 flex justify-center gap-2 items-center
               text-center bg-white hover:border-primary-red
               hover:text-primary-red transition-colors"
               onClick={() => onAddToCart(desserts)}>
                <img src="/images/icon-add-to-cart.svg" alt="" />
                Add To Cart
              </button>
              )}
            </div>



        </div>

        <p className='text-gray-500 text-xs font-semibold'>{desserts.category}</p>
        <p className='font-semibold text-rose-950 text-sm'>{desserts.name}</p>
        <p className='text-primary-red font-semibold'>${desserts.price.toFixed(2)}</p>
    </div>
  )
}

DessertCard.propTypes = {
  desserts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveCart: PropTypes.func.isRequired, 
  cartItems: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    find: PropTypes.number.isRequired
  }),
}

DessertCard.defaultProps = {
  cartItems: [],
};

export default DessertCard