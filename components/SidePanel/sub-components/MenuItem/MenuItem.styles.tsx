import styled from 'styled-components';
import mediaQueries from '../../../../utils/media-queries';

interface StyledMenuItemProps {
    className: string;
    showIcon: boolean;
}

export const StyledMenuItem = styled.div<StyledMenuItemProps>`
    cursor: pointer;
    position: relative;
    color: white;
    height: 5rem;
    width: 100%;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
    justify-content: ${({ showIcon }) => (showIcon ? 'initial' : 'center')};

    .active-indicator {
        position: absolute;
        right: 0;
        height: 100%;
        width: 0.5rem;
        background: ${(props) => props.theme.colors.main.blue[300]};
        display: none;
    }

    a {
        color: white;
        text-decoration: none;
        margin-left: 1rem;
    }

    &.active {
        //TODO swap for color variable
        background-color: ${(props) => props.theme.colors.main.purple[500]};
        .active-indicator {
            display: block;
        }
    }

    ${mediaQueries('sm')`
      
    `};
`;
