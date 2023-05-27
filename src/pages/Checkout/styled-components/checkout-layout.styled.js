import styled from "styled-components";
import { PinkPalete, WhitePaleteColors } from "../../../palete-colors/palete-colors.colors";

export const CheckoutLayout = styled.div`

    display: flex;
    gap: 1rem;
    flex-direction: column;
    text-align: center;
    position: relative;

    .direcciones {
        width: 100%;
        text-align: left;
    }

    .addres_cont {
            display: flex;
            gap: 1rem;
            justify-content: space-between;
            align-items: center;
            height: 5rem;
        }
        .arrow {
            width: 2rem;
            height: 2rem;
        }
        .addres_text {
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .location_icon {
            width: 4rem;
            height: 4rem;
            background-color: ${PinkPalete.C200};
            border-radius: 1rem;
            box-sizing: border-box;
            padding: 0.9rem;
        }

    .pagos {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: left;
    }

   button {
        margin-top: 2rem;
        justify-self: flex-end;
        width: 100%;
        padding: 0 1rem;
        height: 3.5rem;
        border-radius: 2rem;
        background-color: ${PinkPalete.C400};
        color: ${WhitePaleteColors.C50};
        font-weight: bold;
        font-size: 1.2rem;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: ${PinkPalete.C500};
        } 
   }

   .product {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: left;
        justify-content: left;
        padding: 1rem;
        border-radius: 1rem;
        background-color: ${WhitePaleteColors.C50};
        margin-bottom: 1rem;
        width: 100%;
        text-align: left;
        box-sizing: border-box;
        img {
            width: 100%;
            border-radius: 1rem;
            background-color: ${PinkPalete.C200};
            box-sizing: border-box;
            padding: 0.9rem;
        }
   }

`