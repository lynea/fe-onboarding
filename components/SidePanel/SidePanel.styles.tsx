import styled from 'styled-components';

export const StyledSidepanel = styled.aside`
    width: 100%;
    min-height: 100%;
    background-color: ${(props) => props.theme.colors.main.purple[300]};
`;
export const StyledInnerContainer = styled.aside`
    max-height: 99vh;
    width: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;
