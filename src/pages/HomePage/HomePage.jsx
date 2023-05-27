import { useContext } from 'react'
import Model from '../../assets/Model.webp'
import { HomePageLayout } from './styled-components/home-page-layout.styled'
import { TbShoppingBag } from 'react-icons/tb'
import CategoriesNav from './components/CategoriesNav'
import LogoDeno from '../../assets/logo_texto_deno.png'
import { MyContext } from '../../context/ClothesContext'
import styled from 'styled-components'
import { PinkPalete } from '../../palete-colors/palete-colors.colors'
import { Link } from 'react-router-dom'

const ProductContainer = styled.div`

    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

    .pulse {
        position: absolute;
        right: -6px;
        top: -6px;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        padding: 8px;
        background-color: ${PinkPalete.C300};
        opacity: 0;
        animation: ${props => props.selected ? 'none' : 'backgroundPulse 2s linear infinite'};
        z-index: 4;
    }

    @keyframes backgroundPulse {
        0% {
            opacity: 0;
            transform: scale(1);
        }
        50% {
            opacity: 0.6;
            transform: scale(1.2);
        }
        100% {
            opacity: 0;
            transform: scale(2);
        }
    }

    .bag_icon {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 1.5rem;
        background-color: ${props => props.selected === true ? PinkPalete.C500 : PinkPalete.C50};
        color: ${props => props.selected === true ? PinkPalete.C50 : PinkPalete.C500};
        border-radius: 50%;
        padding: 8px;
        transition: 0.2s;
        z-index: 10;
    }

    img {
        max-width: 100%;
        border-radius: 1.3rem;
        min-height: 15rem;
    }

`

const ProductContainerNoStock = styled.div`

    width: 100%;
    position: relative;
    backdrop-filter: blur(10px);

    .bag_icon {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 1.5rem;
        background-color: ${PinkPalete.C50};
        color: ${PinkPalete.C500};
        border-radius: 50%;
        padding: 8px;
        transition: 0.2s;
        opacity: 50%;
    }

    img {
        max-width: 100%;
        border-radius: 1.3rem;
        min-height: 15rem;
        background-color: ${PinkPalete.C400};
    }

`

const HomePage = () => {

    const { products, shoppingBag, BirthdayHoddie, addShoppingBag } = useContext(MyContext)
    console.log(BirthdayHoddie, 'BirthdayHoddie')
    console.log(shoppingBag.includes(BirthdayHoddie), 'Filter')
    console.log(shoppingBag)

    return (
        <HomePageLayout>
            <div className='nav_logo'>
                <img src={LogoDeno} alt="logo" loading='lazy' />
            </div>
            <section className='island'>
                <div className='text_container'>
                    <h2>La prenda perfecta,<br /> hecha exclusivamente</h2>
                    <h1>PARA TI</h1>
                </div>
                <img className='logo' src={Model} alt="logo" loading='lazy' />
            </section>
            <CategoriesNav />
            <div className='product_container'>

                <ProductContainer selected={shoppingBag.length !== 0 ? true : false} key={BirthdayHoddie.id}>
                    <TbShoppingBag onClick={() => addShoppingBag()} className='bag_icon' />
                    <div className='pulse'></div>
                    <Link to={`/product-detail/${BirthdayHoddie.id}`}>
                        <img src={BirthdayHoddie.img} alt={BirthdayHoddie.name} loading='lazy' />
                    </Link>
                    <h3>{BirthdayHoddie.name}</h3>
                    <p>{BirthdayHoddie.price}</p>
                </ProductContainer>

                {
                    products?.map(product => (
                        <ProductContainerNoStock key={product.id}>
                            <TbShoppingBag className='bag_icon' />
                            <img src={product.img} alt={product.name} loading='lazy' />
                            <h3>{product.name}</h3>
                            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'gray' }}>{product.price}</p>
                        </ProductContainerNoStock>
                    ))
                }
            </div>
        </HomePageLayout>
    )
}

export default HomePage