import { useState } from 'react';

import Dessert from './sections/Dessert';
import Cart from './sections/Cart'
import data from './constants/data.json'
import Confirmation from './sections/Confirmation';

function App() {

  const [cartItems, setCartItems] = useState([])
  const [isOpen, setisOpen] = useState(false)

  const addToCart = (dessert) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === dessert.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === dessert.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...dessert, quantity: 1 }];
      }
    });
  }

  const removeCart = (dessert) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === dessert.id)
      if (!existingItem) {
        return prevItems
      } else {
        return prevItems.map(item =>
          item.id === dessert.id && item.quantity > 0 ? {...item, quantity: item.quantity - 1} : item
        )
      }
    })
  }

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const handleConfirmation = () => {
    if(isOpen) {
      setisOpen(!isOpen)
      setCartItems([])
    } else {
      setisOpen(!isOpen)
    }
  }


  return (
    <div className="w-full min-h-screen flex flex-col items-center 
         bg-rose-100 px-10 max-md:px-0 py-20 font-redhat">

      <div className='flex max-lg:items-center items-start max-lg:flex-col gap-6'>
        <Dessert data={data}
         onAddToCart={addToCart}
         onRemoveCart={removeCart}
         cartItems={cartItems}/>

        <Cart 
        cartItems={cartItems}
        removeItem={removeItem}
        handleConfirmation={handleConfirmation}/>
      </div>

      {isOpen && (
        <Confirmation 
        cartItems={cartItems}
        handleConfirmation={handleConfirmation}/>
      )}

    </div>
  )
}

export default App