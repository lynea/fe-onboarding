import styled from 'styled-components';
import { StyledButton } from '../../Botton.styles';

export const StyledRoundedButton = styled(StyledButton)`
    width: 10rem;
    height: 10rem;
    background: ${(props) => props.theme.colors.greyScales.grey[200]};
    color: ${(props) => props.theme.colors.main.purple[300]};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    p {
        font-size: 2rem;
    }
    svg {
        font-size: 6rem;
    }
`;
