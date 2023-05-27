import React, { useContext } from 'react'
import { MyContext } from '../../context/ClothesContext'
import { ShopBagLayout } from './styled-components/shop-bag-layout.styled'
import { Link } from 'react-router-dom'

const ShoppingBag = () => {

  const { BirthdayHoddie } = useContext(MyContext)

  return (
    <ShopBagLayout>
      <h2>ShoppingBag</h2>
      <div className="product-container">
        <img src={BirthdayHoddie.img} alt="Birthday Hoddie" />
        <div className="product-info">
          <h3>{BirthdayHoddie.name}</h3>
          <p>$ 50.000</p>
        </div>
        <Link to="/checkout">
          <button>Completar Orden</button>
        </Link>
      </div>
    </ShopBagLayout>
  )
}

export default ShoppingBag