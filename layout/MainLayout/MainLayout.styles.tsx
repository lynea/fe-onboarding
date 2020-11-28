import styled from 'styled-components';
import mediaQueries from '../../utils/media-queries';
import SidePanel from '../../components/SidePanel';
import { device } from '../../utils/media-queries';

interface GridSidePanelContainerProps {
    isMenuOpen: boolean;
}

// TODO:remove commented stuf

// export const StyledMainContainer = styled.div`
//     display: flex;
//     align-items: center;

//     .menuToggle {
//         position: fixed;
//         top: 1rem;
//         right: 1rem;
//         font-size: 1.4rem;
//         cursor: pointer;
//         ${mediaQueries('md')`
//             display:none;
//     `};
//     }
// `;

// export const StyledSidePanelContainer = styled.aside<StyledSidePanelContainerProps>`
//     position: fixed;
//     z-index: 3;
//     top: 0;
//     left: 0;
//     min-height: 100vh;
//     //TODO add animation
//     width: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : '0px')};
//     background-color: ${(props) => props.theme.colors.main.purple[300]};

//     ${mediaQueries('sm')`
//         flex: 3;
//     `};

//     ${mediaQueries('md')`
//         position: initial;
//     `};
//     ${mediaQueries('lg')`
//         position: initial;
//         flex: 2;
//     `};

//     ${mediaQueries('xl')`
//         flex: 1;
//     `};
// `;

// export const Row = styled.div`
//     display: flex;
//     flex: 1;
//     justify-content: space-around;
// `;

// export const StyledContentContainer = styled.section`
//     min-height: 100vh;
//     flex: 1;
//     display: flex;
//     justify-content: space-around;
//     padding-left: clamp(1.8rem, 2.5vw, 2.8rem);
//     padding-right: clamp(1.8rem, 2.5vw, 2.8rem);
//     ${mediaQueries('sm')`
//         flex:4;
//     `};
// `;

//TODO: add responsive styling

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    /* grid-auto-rows: minmax(100px, auto); */
`;

export const StyledToggle = styled.span`
    position: fixed;
    top: 1rem;
    right: 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    ${mediaQueries('md')`
            display:none;
        `}
`;

export const ContentContainer = styled.section`
    min-height: calc(100vh);
    grid-column: 1 / 13;
    grid-row: 1;
    display: flex;

    ${mediaQueries('md')`   
    grid-column: 4 / 12;
    align-items:center;
     `};
`;

export const GridSidePanel = styled(SidePanel)`
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: ${({ isOpen }) => (isOpen ? '100%' : '0px')};
    background-color: ${(props) => props.theme.colors.main.purple[300]};

    @media only screen and (min-width: 600px) {
        position: initial;
        grid-row: 1;
        grid-column: ${({ isOpen }) => (isOpen ? '1 / 3' : '1/2')};
        width: 100%;
    }
`;
