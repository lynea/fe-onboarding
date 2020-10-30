import styled from 'styled-components';
import mediaQueries from '../../utils/media-queries';
//TODO add responsive layouts

export const StyledCardContainer = styled.div`
    ${mediaQueries('md')`
        box-shadow: 0px 3px 21px #0000001a;
        height: 40rem;
    `};
    width: 100%;
    height: 100vh;
`;
