import styled from 'styled-components';
import mediaQueries from '../../utils/media-queries';

export const StyledFullWidthContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: clamp(1rem, 5vw, 3rem) clamp(1.8rem, 9vw, 20rem);
    min-height: 100vh;
    flex-wrap: wrap;
    background: transparent linear-gradient(180deg, #1129a8 0%, #6b2fad 100%) 0% 0% no-repeat padding-box;
`;

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    margin: 0 auto;
    grid-gap: 1rem;

    .button-1 {
        grid-column: 1 / 7;
        grid-row: 1;
    }
    .button-2 {
        grid-column: 7 / 13;
        grid-row: 1;
    }
    .button-3 {
        grid-column: 1 / 7;
        grid-row: 2;
    }
    .button-4 {
        grid-column: 7 / 13;
        grid-row: 2;
    }

    ${mediaQueries('sm')`
        grid-template-rows: 12rem 12rem;
        grid-gap: 2rem;
        .button-1 {
            grid-column: 1 / 7;
        }
        .button-2 {
            grid-column: 7 / 13;
        }
        .button-3 {
            grid-column: 1 / 7;
            grid-row: 2;
        }
        .button-4 {
            grid-column: 7 / 13;
            grid-row: 2;
        }
    `};
    ${mediaQueries('md')`
       grid-template-rows: 15rem 15rem;
       
    `};

    ${mediaQueries('lg')`
    grid-template-rows: 20rem;
        .button-1 {
            grid-column: 1 / 4;
            grid-row: 1;
        }
        .button-2 {
            grid-column: 4 / 7;
            grid-row: 1;
        }
        .button-3 {
            grid-column: 7 / 10;
            grid-row: 1;
        }
        .button-4 {
            grid-column: 10 / 13;
            grid-row: 1;
        }
    `};
    ${mediaQueries('xl')`
    grid-template-rows: 20rem;
    `};
`;

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: clamp(1rem, 3vw, 2rem);
`;

export const CenteredImage = styled.img`
    width: 40%;
    display: none;

    ${mediaQueries('lg')`display: block;`};
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fafafa;

    h1 {
        font-size: clamp(3rem, 6vw, 8rem);
        margin: 0 0 1rem 0;
    }
    h2 {
        font-size: clamp(1.8rem, 3vw, 4rem);
        margin: 0 0 1rem 0;
    }
`;
