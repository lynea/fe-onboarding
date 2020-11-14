import styled from 'styled-components';

export const Grid = styled.section`
    display: grid;
`;

export const Topbar = styled.nav`
    height: 72px;
    width: 100%;
    background: red;
`;

export const StyledSubBar = styled.div`
    height: 72px;
    width: 100%;
    background: blue;
`;
export const Footer = styled.footer`
    height: 72px;
    width: 100%;
    background: green;
    position: static;
    bottom: 0;
`;

export const StyledMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: static;
    top: 0;
`;
