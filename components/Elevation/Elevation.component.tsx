import { ElevationProps } from './types';
import styled, { css } from 'styled-components';

export const Elevation = styled.div<ElevationProps>`
    ${({ elevation }) =>
        elevation === 1 &&
        css`
            box-shadow: 0px 3px 21px #0000001a;
        `}

    ${({ elevation }) =>
        elevation === 2 &&
        css`
            box-shadow: 0px 3px 21px #0000001a;
        `}

    ${({ elevation }) =>
        elevation === 3 &&
        css`
            box-shadow: 0px 3px 21px #0000001a;
        `}
`;

export default Elevation;
