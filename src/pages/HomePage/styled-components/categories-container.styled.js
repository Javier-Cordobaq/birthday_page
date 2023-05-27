import styled from "styled-components";

export const CategoriesContainer = styled.div`

    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    max-width: 100%;
    overflow: auto;
    padding: 0.5rem 0.3rem;
    box-sizing: border-box;

    &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 0;
    }

    &::-webkit-scrollbar:vertical {
        width:0;
        height: 0;
    }

    &::-webkit-scrollbar-button:increment,&::-webkit-scrollbar-button {
        display: none;
    } 

    &::-webkit-scrollbar:horizontal {
        height: 0;
    }
    
`