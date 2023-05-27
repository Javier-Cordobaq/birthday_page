import styled from "styled-components";
import { PinkPalete, WhitePaleteColors } from "../../../palete-colors/palete-colors.colors";

export const HomePageLayout = styled.div`

    display: flex;
    gap: 1rem;
    flex-direction: column;

    .island {
        display: flex;
        background-color: ${PinkPalete.C300};
        border-radius: 1.3rem;
        position: relative;
        overflow: hidden;
        padding:  1rem 6rem 1rem 1rem;
        min-height: 10rem;
        max-height: 10rem;
        box-sizing: border-box;
        color: ${WhitePaleteColors.C50};
        font-size: 0.9rem;
        .text_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            h1 {
                background-image: linear-gradient(to bottom, #4c0519, #9f1239);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-family: 'Fugaz One', cursive;
                font-size: 2.5rem;
                margin-top: 5px;
            }
            h2 {
                font-size: 1.2rem;
            }
        }
        .logo {
            object-fit: cover;
            aspect-ratio: 1/1;
            height: 10rem;
            position: absolute;
            right: 0.9rem;
            bottom: 0;
            width: 8rem;
            filter: ${`drop-shadow(0 2px 20px ${PinkPalete.C900})`};
        }
    }

    .nav_logo {
        display: flex;
        justify-content: center;
        width: 100%;
        img {
            object-fit: cover;
            width: 50%;
        }
    }

    .product_container {
        display: grid;
        column-gap: 0.8rem;
        row-gap: 0.8rem;
        grid-template-columns: repeat(2, 1fr);
        h3 {
            font-weight: 400;
        }
        p {
            font-size: 0.9rem;
            font-weight: bold;
        }
    }

    a {
        color: ${WhitePaleteColors.C800};
    }

`