import styled from "styled-components";
import { PinkPalete, WhitePaleteColors } from "../palete-colors/palete-colors.colors";

export const NavLayout = styled.div`

    display: flex;
    justify-content: center;
    width: 100%;

    .nav_island {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 90%;
        height: 100%;
        box-sizing: border-box;
        padding: 1.5rem 1rem;
        margin: 1rem;
        border-radius: 5rem;

        background: rgba( 0, 0, 0, 0.6 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 10px );
        -webkit-backdrop-filter: blur( 15px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

    a {
        height: 100%;
        width: 100%;
        display: flex;
        gap: 4px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 1.8rem;
        border-radius: 50%;
    }

    p {
        margin: 0;
        font-size: 0.8rem;
    }

`