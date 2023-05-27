import styled from "styled-components";
import { PinkPalete, WhitePaleteColors } from "../../../palete-colors/palete-colors.colors";

export const ShopBagLayout = styled.div`

    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;

    .product-container {
        display: flex;
        gap: 1rem;
        width: 100%;
        height: 6rem;
        border: 1px solid ${WhitePaleteColors.C400};
        border-radius: 1rem;
        box-sizing: border-box;
        padding: 1rem;
        img {
            max-height: 100%;
            object-fit: cover;
            border-radius: 0.5rem;
        }
        button {
            justify-self: flex-end;
            width: auto;
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
    }

`