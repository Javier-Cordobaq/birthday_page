import styled from "styled-components";
import { PinkPalete, WhitePaleteColors } from "../../../palete-colors/palete-colors.colors";

export const ProductDetailLayout = styled.div`

    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;

    .images_container {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.8rem;

        img {
            border-radius: 1.5rem;
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }

        img:nth-child(1) {
            width: 100%;
            height: 16rem;
            grid-area: 1 / 1 / 2 / 3;
            overflow: hidden;
        }
        img:nth-child(2) {
            object-fit: cover;
            width: 100%;
            height: 12rem;
            grid-area: 2 / 1 / 3 / 2;
            overflow: hidden;
            border: ${`3px solid ${PinkPalete.C300}`};
            box-sizing: border-box;
        }
        img:nth-child(3) {
            width: 100%;
            height: 12rem;
            grid-area: 2 / 2 / 3 / 3;
            overflow: hidden;
            object-fit: cover;
            box-sizing: border-box;
        }
    }

    .product_info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .container_price {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            p {
                color: ${PinkPalete.C400};
            }
            h3 {
                font-size: 1.2rem;
                font-weight: bold;
            }
            .unidades {
                font-size: 0.9rem;
                color: ${WhitePaleteColors.C400};
                font-weight: bold;
            }
        }
    }

    .talla_container {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 0.5rem;
    }

    button {
        width: 100%;
        height: 3.5rem;
        border-radius: 2rem;
        background-color: ${PinkPalete.C400};
        color: ${WhitePaleteColors.C50};
        font-weight: bold;
        font-size: 1.3rem;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: ${PinkPalete.C500};
        } 
    }

`