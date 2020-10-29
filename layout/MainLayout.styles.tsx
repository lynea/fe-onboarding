import styled from 'styled-components';
import mediaQueries from '../utils/media-queries';

interface StyledSidePanelContainerProps {
    isMenuOpen: boolean;
}

export const StyledMainContainer = styled.div`
    display: flex;
    align-items: center;

    .menuToggle {
        position: fixed;
        top: 1rem;
        right: 1rem;
        font-size: 1.4rem;
        cursor: pointer;
        ${mediaQueries('md')`
            display:none;
    `};
    }
`;

export const StyledFullWidthContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: clamp(1rem, 5vw, 3rem) clamp(1.8rem, 9vw, 20rem);
    min-height: 100vh;
    flex-wrap: wrap;
    background: transparent linear-gradient(180deg, #1129a8 0%, #6b2fad 100%) 0% 0% no-repeat padding-box;
`;

export const StyledSidePanelContainer = styled.aside<StyledSidePanelContainerProps>`
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    min-height: 100vh;
    //TODO add animation
    width: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : '0px')};
    background-color: ${(props) => props.theme.colors.main.purple[300]};

    ${mediaQueries('sm')`
        flex: 3;
    `};

    ${mediaQueries('md')`
        position: initial;
    `};
    ${mediaQueries('lg')`
        position: initial;
        flex: 2;
    `};

    ${mediaQueries('xl')`
        flex: 1;
    `};
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

export const StyledContentContainer = styled.section`
    flex: 1;
    display: flex;
    justify-content: space-around;
    padding-left: clamp(1.8rem, 2.5vw, 2.8rem);
    padding-right: clamp(1.8rem, 2.5vw, 2.8rem);
    ${mediaQueries('sm')`
        flex:4;
    `};
`;
