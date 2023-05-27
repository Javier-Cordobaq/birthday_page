import React, { useContext, useState } from 'react'
import { MyContext } from '../../../context/ClothesContext'
import { CategoriesContainer } from '../styled-components'
import styled from 'styled-components'
import { PinkPalete } from '../../../palete-colors/palete-colors.colors'

const SectionCategories = styled.div`

    transition: 0.2s all;
    padding: 0.5rem 1rem;
    background-color: ${props => props.isActive ? PinkPalete.C100 : PinkPalete.C50};
    border: 1px solid ${props => props.isActive ? PinkPalete.C400 : PinkPalete.C100};
    border-radius: 4rem;
    color: ${props => props.isActive ? PinkPalete.C400 : PinkPalete.C300};

`

const CategoriesNav = () => {

    const { categories } = useContext(MyContext)

    const [categorie, setCategorie] = useState('Birthday')

    return (
        <CategoriesContainer>
            {
                categories?.map(category => (
                    <SectionCategories onClick={() => setCategorie(category.name)} isActive={categorie === category.name ? true : false} key={category.id}>
                        <h3>{category.name}</h3>
                    </SectionCategories>
                ))
            }
        </CategoriesContainer>
    )
}

export default CategoriesNav