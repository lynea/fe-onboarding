import styled from 'styled-components';
import mediaQueries from '../../../../utils/media-queries';

interface StyledMenuItemProps {
    className: string;
}

export const StyledMenuItem = styled.div<StyledMenuItemProps>`
    cursor: pointer;
    color: white;
    height: 6rem;
    width: 100%;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;

    a {
        color: white;
        text-decoration: none;
        margin-left: 1rem;
    }

    &.active {
        //TODO swap for color variable
        background-color: purple;
    }

    ${mediaQueries('sm')`
        font-size: 1.8rem;
    `};
`;
