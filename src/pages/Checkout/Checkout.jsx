import { useContext, useState } from 'react'
import { CheckoutLayout } from './styled-components/checkout-layout.styled'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { BiBody } from 'react-icons/bi'
import { FaKissBeam } from 'react-icons/fa'
import styled from 'styled-components'
import { PinkPalete } from '../../palete-colors/palete-colors.colors'
import { MyContext } from '../../context/ClothesContext'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Order from '../../assets/order.svg'

const Check = styled.div`

  width: 2rem;
  height: 2rem;
  background-color: ${props => props.active ? PinkPalete.C400 : 'white'};
  border: 1px solid ${props => props.active ? PinkPalete.C600 : PinkPalete.C400};
  border-radius: 0.5rem;
  transition: 0.3s all;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${props => props.active ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'};
    width: 1rem;
    height: 1rem;
    background-color: ${PinkPalete.C400};
    border-radius: 50%;
    transition: 0.3s all;
  }

`

const Checkout = () => {

  const [check, setCheck] = useState('kiss')
  const { BirthdayHoddie, addShoppingBag } = useContext(MyContext)
  const notify = () => {
    toast((t) => (
      <span className='confirm_toast'>
        <img src={Order} alt='' />
        <p>En unos minutos le haremos llegar su pedido, gracias por confiar en nosotros</p>
        <Link to='/'>
          <IoIosCloseCircleOutline className='icon' onClick={() => {
            toast.dismiss(t.id)
            addShoppingBag()
          }} />
        </Link>
      </span>
    ), { duration: Infinity });
  }

  return (
    <CheckoutLayout>
      <div className='nav_check'>
        <Link to='/'>
          <BiArrowBack className='back_icon' />
        </Link>
        <h2>Checkout</h2>
        <BiArrowBack className='back_icon' style={{ visibility: 'hidden' }} />
      </div>
      <div className='product'>
        <h3>Productos</h3>
        <div className='product_cont'>
          <img src={BirthdayHoddie.img} alt='Birthday Hoddie' />
          <div>
            <h3>{BirthdayHoddie.name}</h3>
            <p>{BirthdayHoddie.price}</p>
          </div>
        </div>
      </div>
      <div className='direcciones'>
        <h3>Direccione de entrega</h3>
        <div className='addres_cont'>
          <div>
            <HiOutlineLocationMarker className='location_icon' />
          </div>
          <div className='addres_text'>
            <div>
              <p style={{ fontWeight: 'bold' }}>10456 Talbot Lane Poblado</p>
              <p style={{ color: 'gray' }}>MedaYork</p>
            </div>
            <IoIosArrowForward className='arrow' />
          </div>
        </div>
      </div>
      <div className='pagos'>
        <h3>Metodos de Pago</h3>

        <div className='addres_cont'>
          <div>
            <BiBody className='location_icon' />
          </div>
          <div className='addres_text'>
            <div>
              <p style={{ fontWeight: 'bold' }}>Besos</p>
              <p style={{ color: 'gray' }}>Minimio 1.000.000</p>
            </div>
            <Check active={check === 'kiss'} onClick={() => setCheck('kiss')} />
          </div>
        </div>

        <div className='addres_cont'>
          <div>
            <FaKissBeam className='location_icon' />
          </div>
          <div className='addres_text'>
            <div>
              <p style={{ fontWeight: 'bold' }}>Abrazos</p>
              <p style={{ color: 'gray' }}>Debe ser un abrazo de oso</p>
            </div>
            <Check active={check === 'hug'} onClick={() => setCheck('hug')} />
          </div>
        </div>

        <button onClick={notify} type='button'>Comprar</button>

        <Toaster position='top-center' />
      </div>
    </CheckoutLayout>
  )
}

export default Checkout