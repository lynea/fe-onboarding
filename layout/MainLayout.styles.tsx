import styled from 'styled-components';
import mediaQueries from '../utils/media-queries';

export const StyledMainContainer = styled.div`
    display: flex;
    align-items: center;
    background: transparent linear-gradient(180deg, #1129a8 0%, #6b2fad 100%) 0% 0% no-repeat padding-box;
`;

export const StyledFullWidthContainer = styled.div`
    display: flex;

    justify-content: space-around;
    padding: clamp(1rem, 5vw, 3rem) clamp(1.8rem, 9vw, 20rem);
    min-height: 100vh;
    flex-wrap: wrap;
    background: transparent linear-gradient(180deg, #1129a8 0%, #6b2fad 100%) 0% 0% no-repeat padding-box;
`;

export const StyledSidePanelContainer = styled.aside`
    flex: 0;
    @media only screen and (min-width: 600px) {
        height: 100vh;
        flex: 1;
        background: red;
    } ;
`;
export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    justify-content: space-around;

    button:not(:nth-child(2)):not(:nth-child(4)) {
        margin-right: 1rem;
    }

    button {
        margin-bottom: 2rem;
    }

    ${mediaQueries('sm')`
        justify-content: space-between;
         button:not(:nth-child(3)){
            margin-right:1rem;
        }
    `};

    ${mediaQueries('md')`
    button:not(:nth-child(2)):not(:nth-child(4)) {
    margin-right: 0rem;
}
    button:not(:nth-child(3)) {
    margin-right: 0rem;
}
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

export const Row = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
`;

export const StyledTopMenuContainer = styled.menu`
    height: 4rem;
    width: 100%;
    background: blue;
    margin: 0;
`;
export const StyledContentContainer = styled.section`
    flex: 1;
    padding: clamp(1.8rem, 2.5vw, 2.8rem);
    @media only screen and (min-width: 600px) {
        flex: 4;
    } ;
`;
