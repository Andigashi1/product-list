import DessertCard from './DessertCard'
import PropTypes from 'prop-types'

function Dessert({ data, onAddToCart, onRemoveCart, cartItems }) {
  return (
    <div className='max-w-2xl max-sm:max-w-md max-md:mx-4 mb-8'>
      <h1 className='text-4xl text-rose-950 font-bold mb-10'>Desserts</h1>

      <div className='grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8'>
        {data.map(item => (
          <DessertCard
          key={item.id}
          desserts={item}
          onAddToCart={onAddToCart}
          onRemoveCart={onRemoveCart}
          cartItems={cartItems}/>
        ))}
      </div>
    </div>
  )
}

Dessert.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
        mobile: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired, 
  onRemoveCart: PropTypes.func.isRequired, 
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
}

export default Dessert