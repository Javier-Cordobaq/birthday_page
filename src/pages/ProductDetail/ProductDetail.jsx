import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../context/ClothesContext'
import { Link, useParams } from 'react-router-dom'
import { ProductDetailLayout } from './styled-components/product-detail-layout.styled';
import styled from 'styled-components';
import { WhitePaleteColors } from '../../palete-colors/palete-colors.colors';
import { BiArrowBack } from 'react-icons/bi'
import { TbShoppingBag } from 'react-icons/tb'

const TallaButton = styled.span`

    display: grid;
    place-items: center;
    background-color: ${props => props.active ? WhitePaleteColors.C900 : 'white'};
    color: ${props => props.active ? 'white' : WhitePaleteColors.C900};
    border: ${props => props.active ? 'none' : `1px solid ${WhitePaleteColors.C400}`};
    height: 50px;
    width: 50px;
    border-radius: 50%;
    box-sizing: border-box;

`

const ProductDetail = () => {

    const { id } = useParams();

    const { BirthdayHoddie, shoppingBag, addShoppingBag } = useContext(MyContext)

    const [talla, setTalla] = useState('M')
    const tallas = ['S', 'M', 'L', 'XL', 'XXL']

    return (
        <ProductDetailLayout selected={shoppingBag.length !== 0 ? true : false}>
            <div className='detail_nav'>
                <Link to='/'>
                    <BiArrowBack className='back_icon' />
                </Link>
                <h2>Details Product</h2>
                <BiArrowBack className='back_icon' style={{ visibility: 'hidden' }} />
            </div>
            <div className='images_container'>
                <img src={BirthdayHoddie?.back} alt={BirthdayHoddie?.name} />
                <img src={BirthdayHoddie?.imagen_apoyo_1} alt={BirthdayHoddie?.name} />
                <img src={BirthdayHoddie?.imagen_apoyo_2} alt={BirthdayHoddie?.name} />
                <TbShoppingBag onClick={() => addShoppingBag()} className='bag_icon' />
            </div>
            <div className='product_info'>
                <div>

                    <h2>{BirthdayHoddie?.name}</h2>
                </div>
                <div className='container_price'>
                    <p>Best Seller</p>
                    <h3>${BirthdayHoddie?.price}</h3>
                    <p className='unidades'>1 unidad disponible</p>
                </div>
            </div>
            <p>{BirthdayHoddie?.description}</p>
            <div className='talla_container'>
                {
                    tallas.map((element, index) => (
                        <TallaButton active={talla === element} key={index}>{element}</TallaButton >
                    ))
                }
            </div>
            <div className='unica_talla'>
                <p>Por el momento solo tenemos esta talla</p>
            </div>
            <button type='button' onClick={() => addShoppingBag()}>Añadir a la bolsa</button>
        </ProductDetailLayout>
    )
}

export default ProductDetail