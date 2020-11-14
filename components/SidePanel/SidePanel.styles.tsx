import styled from 'styled-components';
import mediaQueries from '../../utils/media-queries';
import { motion } from 'framer-motion';

interface StyledSidePanelProps {
    isOpen: boolean;
}

export const StyledSidepanel = styled(motion.aside)<StyledSidePanelProps>`
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
        cursor: pointer;

        ${mediaQueries('md')`
            display:none;
    `};
    }
`;
export const StyledInnerContainer = styled.div`
    max-height: 99vh;
    width: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;
