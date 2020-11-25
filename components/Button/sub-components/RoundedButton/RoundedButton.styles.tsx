import styled from 'styled-components';
import { StyledButton } from '../../Botton.styles';
import mediaQueries from '../../../../utils/media-queries';

export const StyledRoundedButton = styled(StyledButton)`
    background: ${(props) => props.theme.colors.greyScales.grey[200]};
    color: ${(props) => props.theme.colors.main.purple[300]};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0.3rem;

    p {
        font-size: 1rem;
        margin: 0;
    }
    svg {
        font-size: 3rem;
    }

    &:hover {
        box-shadow: 15px 10px 15px #00000070;
        cursor: pointer;
    }

    ${mediaQueries('sm')`
       

        svg {
            font-size: 5rem;
        };

         p {
            font-size: 1.5rem;
        }
    `};

    ${mediaQueries('lg')`
       

        svg {
            font-size: 7rem;
        };

         p {
            font-size: 1.6rem;
        }
    `};

    ${mediaQueries('xl')`
        

        svg {
            font-size: 7rem;
        };

         p {
            font-size: 2rem;
        }
    `};
`;
