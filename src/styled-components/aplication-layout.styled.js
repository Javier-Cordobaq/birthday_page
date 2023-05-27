import styled from "styled-components";
import { WhitePaleteColors } from "../palete-colors/palete-colors.colors";

export const AplicationLayout = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    min-height: 100vh;
    width: 100vw;
    padding: 1rem;
    box-sizing: border-box;
    background-color: ${WhitePaleteColors.C50};
    color: ${WhitePaleteColors.C900};
    position: relative;

    .content { 
        grid-area: 1 / 1 / 12 / 6;
        height: 100%;
        width: 100%;
    }
    .nav { 
        grid-area: 12 / 1 / 13 / 6;
        width: 100%;
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 100;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

`