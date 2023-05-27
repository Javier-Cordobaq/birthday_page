import styled from "styled-components";
import { PinkPalete, WhitePaleteColors } from "../../../palete-colors/palete-colors.colors";

export const ShopBagLayout = styled.div`

    display: flex;
    gap: 1rem;
    flex-direction: column;
    text-align: center;

    a {
        color: ${WhitePaleteColors.C800};
    }

    .nav_shopping {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .back_icon {
            font-size: 1.5rem;
        }
    }

    .product-container {
        display: flex;
        gap: 1rem;
        width: 100%;
        height: auto;
        border-top: 1px solid ${WhitePaleteColors.C300};
        border-bottom: 1px solid ${WhitePaleteColors.C300};
        box-sizing: border-box;
        padding: 0.5rem;
        text-align: left;
        img {
            display: grid;
            place-items: center;
            max-height: 6rem;
            width: 5rem;
            object-fit: cover;
            border-radius: 0.5rem;
            aspect-ratio: 1/2;
        }
        p {
            font-size: 0.9rem;
            font-weight: bold;
            color: ${WhitePaleteColors.C400};
        }
    }

    button {
            justify-self: flex-end;
            width: 100%;
            padding: 0 1rem;
            height: 3.5rem;
            border-radius: 2rem;
            background-color: ${PinkPalete.C400};
            color: ${WhitePaleteColors.C50};
            font-weight: bold;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
                background-color: ${PinkPalete.C500};
            } 
    }

`