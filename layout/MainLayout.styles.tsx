import styled from 'styled-components';

export const StyledMainContainer = styled.div`
    display: flex;
    align-items: center;
    background: transparent linear-gradient(180deg, #1129a8 0%, #6b2fad 100%) 0% 0% no-repeat padding-box;
`;

export const StyledFullWidthContainer = styled.div`
    display: flex;

    justify-content: space-around;
    padding: clamp(1.8rem, 9vw, 20rem);
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
