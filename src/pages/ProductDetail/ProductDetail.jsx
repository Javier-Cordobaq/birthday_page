import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../context/ClothesContext'
import { useParams } from 'react-router-dom'
import { ProductDetailLayout } from './styled-components/product-detail-layout.styled';
import styled from 'styled-components';
import { WhitePaleteColors } from '../../palete-colors/palete-colors.colors';

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

    const { BirthdayHoddie } = useContext(MyContext)

    const [talla, setTalla] = useState('M')
    const tallas = ['S', 'M', 'L', 'XL', 'XXL']

    const { addShoppingBag } = useContext(MyContext)

    return (
        <ProductDetailLayout>
            <h2>Details Product</h2>
            <div className='images_container'>
                <img src={BirthdayHoddie?.back} alt={BirthdayHoddie?.name} />
                <img src={BirthdayHoddie?.imagen_apoyo_1} alt={BirthdayHoddie?.name} />
                <img src={BirthdayHoddie?.imagen_apoyo_2} alt={BirthdayHoddie?.name} />
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
            <p>Por el momento solo tenemos esta talla</p>
            <button type='button' onClick={() => addShoppingBag()}>Añadir a la bolsa</button>
        </ProductDetailLayout>
    )
}

export default ProductDetail