import styled from "styled-components";
import { PinkPalete, WhitePaleteColors } from "../../../palete-colors/palete-colors.colors";

export const ProductDetailLayout = styled.div`

    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;

    .detail_nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .back_icon {
            font-size: 1.5rem;
        }
    }

    .images_container {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.8rem;
        position: relative;

        img {
            border-radius: 1.5rem;
            max-width: 100%;
            object-fit: cover;
        }

        img:nth-child(1) {
            width: 100%;
            max-height: 16rem;
            grid-column: span 2;
            overflow: hidden;
        }
        img:nth-child(2) {
            object-fit: cover;
            width: 100%;
            max-height: 12rem;
            grid-column: span 1;
            overflow: hidden;
            border: ${`3px solid ${PinkPalete.C300}`};
            box-sizing: border-box;
        }
        img:nth-child(3) {
            width: 100%;
            max-height: 12rem;
            grid-area: 2 / 2 / 3 / 3;
            overflow: hidden;
            object-fit: cover;
            box-sizing: border-box;
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

    a {
        color: ${WhitePaleteColors.C800};
    }

    .unica_talla {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: 1rem;
        color: ${WhitePaleteColors.C400};
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