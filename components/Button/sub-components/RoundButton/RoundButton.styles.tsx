import styled from 'styled-components';
import { StyledButton } from '../../Botton.styles';

export const StyledRoundButton = styled(StyledButton)`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 10rem;
    box-shadow: 3px 5px 12px #0000003c;
    color: ${(props) => props.theme.colors.greyScales.grey[300]};
    background: ${(props) => props.theme.colors.greyScales.grey[200]};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        box-shadow: 4px 2px 8px #00000047;
    }

    svg {
        font-size: 2rem;
    }
`;
