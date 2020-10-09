import styled from 'styled-components';
import { StyledButton } from '../../Botton.styles';
import mediaQueries from '../../../../utils/media-queries';

export const StyledRoundedButton = styled(StyledButton)`
    width: 7rem;
    height: 7rem;
    background: ${(props) => props.theme.colors.greyScales.grey[200]};
    color: ${(props) => props.theme.colors.main.purple[300]};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
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
        width:10rem;
        height:10rem;

        svg {
            font-size: 5rem;
        };

         p {
            font-size: 1.5rem;
        }
    `};
    ${mediaQueries('md')`
        width:10rem;
        height:10rem;
    `};

    ${mediaQueries('lg')`
        width:12rem;
        height:12rem;

        svg {
            font-size: 7rem;
        };

         p {
            font-size: 1.6rem;
        }
    `};

    ${mediaQueries('xl')`
        width:15rem;
        height:15rem;

        svg {
            font-size: 7rem;
        };

         p {
            font-size: 2rem;
        }
    `};
`;
