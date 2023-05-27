import React, { useContext } from 'react'
import { MyContext } from '../../context/ClothesContext'
import { ShopBagLayout } from './styled-components/shop-bag-layout.styled'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

const ShoppingBag = () => {

  const { BirthdayHoddie, shoppingBag } = useContext(MyContext)

  return (
    <ShopBagLayout>
      {shoppingBag.length !== 0 ?
        <>
          <div className='nav_shopping'>
            <Link to='/'>
              <BiArrowBack className='back_icon' />
            </Link>
            <h2>ShoppingBag</h2>
            <BiArrowBack className='back_icon' style={{ visibility: 'hidden' }} />
          </div>
          <div className="product-container">
            <img src={BirthdayHoddie.img} alt="Birthday Hoddie" />
            <div className="product-info">
              <h3>{BirthdayHoddie.name}</h3>
              <p>{BirthdayHoddie.price}</p>
              <p>Talla: {BirthdayHoddie.talla}</p>
              <p>Cantidad: 1</p>
            </div>
          </div>
          <Link to="/checkout">
            <button>Completar Orden</button>
          </Link>
        </>
        :
        <>
          <h2>ShoppingBag</h2>
          <h2>No hay productos en el carrito</h2>
        </>
      }
    </ShopBagLayout>
  )
}

export default ShoppingBag