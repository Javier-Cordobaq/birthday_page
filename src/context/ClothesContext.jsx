import React, { createContext, useState } from 'react';
import BusoRick from '../assets/BusoRick.webp'
import BusoRickTwo from '../assets/BusoRickTwo.webp'
import BusoHomero from '../assets/BusoHomero.webp'
import BusoFrontal from '../assets/BusoFrontal.webp'
import Cats from '../assets/Cats.webp'
import CatLover from '../assets/CatLover.webp'
import BusoAtras from '../assets/BusoAtras.webp'

// Crear el contexto
const MyContext = createContext();

// Crear el componente Proveedor
const MyContextProvider = ({ children }) => {
  // Estado y funciones que deseas compartir

  const [shoppingBag, setShoppingBag] = useState([])

  const BirthdayHoddie = {
    id: 1,
    name: 'Cat Lover',
    price: '$Free for you my love',
    img: BusoFrontal,
    back: BusoAtras,
    imagen_apoyo_1: Cats,
    imagen_apoyo_2: CatLover,
    talla: 'M',
    description: 'El buso perfecto para la mujer más hermosa, inteligente y capaz del mundo, diseñado especialmente para ti, aprovechando que no fue un tatuaje, pensé en dejar este diseño en un buso con el cual puedas presumir a tus hermosos gatos, el diseño desde un principio lo hice con mucho cariño y me encanto, por lo cual espero en este buso que con mucho cariño te hice, puedas presumir mucho que tienes unos gatos hermosos y un novio que dibuja tus gatos aun más hermosos, feliz cumpleaños!, Ahora de aquí ve porfa al icono de bolsito para completar la compra mi cielo.',
  }

  const [products, setProducts] = useState([
    {
      id: 2,
      name: 'Rick Doodles',
      price: 'Próximamente disponible',
      img: BusoRick
    },
    {
      id: 3,
      name: 'Rick and Morty',
      price: 'Próximamente disponible',
      img: BusoRickTwo
    },
    {
      id: 4,
      name: 'Homero',
      price: 'Próximamente disponible',
      img: BusoHomero
    },
  ]);

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Birthday',
    },
    {
      id: 2,
      name: 'All',
    },
    {
      id: 3,
      name: 'Hoddies',
    },
    {
      id: 4,
      name: 'Popular',
    },
  ])

  const addShoppingBag = () => {
    if (shoppingBag.length !== 0) {
      setShoppingBag([])
      return
    }
    setShoppingBag([...shoppingBag, BirthdayHoddie])
  }

  // Valores que se proporcionarán en el contexto
  const contextValues = {
    products,
    categories,
    shoppingBag,
    BirthdayHoddie,
    addShoppingBag,
  };

  // Renderizar el componente proveedor con el contexto
  return (
    <MyContext.Provider value={contextValues}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
