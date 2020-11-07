import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
`;

export const TopBar = styled.nav`
    background: red;
    grid-column: 1 / 13;
    grid-row: 1;
    height: 72px;
`;

export const Footer = styled(TopBar)`
    grid-column: 1 / 13;
    grid-row: 3;
    ]height: 72px;
`;

export const ContentContainer = styled.section`
    min-height: calc(100vh - 200px);
    grid-column: 3 / 11;
    grid-row: 2;
    display: grid;
`;
