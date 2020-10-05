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
    padding: 1rem 0;
    &:hover{
        box-shadow: 0px 3px 15px #00000029;
        cursor: pointer;
    }
    p {
        font-size: 2rem;
        margin: 0; 

    }
    svg {
        font-size: 6rem;
    }
`;
