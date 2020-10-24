import styled from 'styled-components';
import mediaQueries from '../../utils/media-queries';

interface StyledSidePanelProps {
    isOpen: boolean;
}

export const StyledSidepanel = styled.aside<StyledSidePanelProps>`
    width: 100%;
    min-height: 100%;
    background-color: ${(props) => props.theme.colors.main.purple[300]};
    display: flex;
    flex-direction: column;

    .close {
        color: white;
        font-size: 1.8rem;
        right: 1rem;
        align-self: flex-end;
        margin: 1rem 1rem 0 0;

        ${mediaQueries('md')`
            display:none;
    `};
    }
`;
export const StyledInnerContainer = styled.aside`
    max-height: 99vh;
    width: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;
