import { RiHomeLine } from 'react-icons/ri'
import { NavLink, useLocation } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { TbShoppingBag } from 'react-icons/tb'
import { HiOutlineUser } from 'react-icons/hi'
import { NavLayout } from '../styled-components/nav-layout.styled'
import styled from 'styled-components'
import { PinkPalete, WhitePaleteColors } from '../palete-colors/palete-colors.colors'
import { useContext } from 'react'
import { MyContext } from '../context/ClothesContext'

const StyledLink = styled(NavLink)`

    color: ${props => props.isActive ? PinkPalete.C300 : WhitePaleteColors.C400};
    fill: ${props => props.isActive ? PinkPalete.C300 : WhitePaleteColors.C400};
    transition: 0.2s all;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background-color: ${props => props.isActive ? PinkPalete.C300 : 'transparent'};
        transition: 0.2s all;
    }

    .bag_counter {
        display: grid;
        place-items: center;
        position: absolute;
        top: -5px;
        right: 20px;
        background-color: ${PinkPalete.C300};
        color: ${WhitePaleteColors.C50};
        border-radius: 50%;
        height: 15px;
        width: 15px;
        font-size: 0.7rem;
        box-sizing: border-box;
        margin: 0;
        font-weight: bold;
    }
        

`

const Nav = () => {

    const { pathname } = useLocation();

    const { shoppingBag } = useContext(MyContext)

    return (
        <NavLayout>
            <div className='nav_island'>
                <StyledLink isActive={pathname === '/' ? true : false} to='/'>
                    <RiHomeLine />
                </StyledLink>
                <StyledLink isActive={pathname === '/product-detail' ? true : false}>
                    <FiSearch />
                </StyledLink>
                <StyledLink isActive={pathname === '/shopping-bag' ? true : false} to='/shopping-bag'>
                    <TbShoppingBag/>
                    {
                        shoppingBag.length > 0 &&
                        <span className='bag_counter'>{shoppingBag.length}</span>
                    }
                </StyledLink>
                <StyledLink>
                    <HiOutlineUser />
                </StyledLink>
            </div>
        </NavLayout>
    )
}

export default Nav