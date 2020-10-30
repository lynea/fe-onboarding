import { ElevationProps } from './types';
import styled, { css } from 'styled-components';
import React, { FunctionComponent } from 'react';

//TODO: see if its doable to wrap around text container

export const StyledElevation = styled.span<ElevationProps>`
    display: block;
    height: 100%;
    width: 100%;

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
        `};
`;

const Elevation: FunctionComponent<ElevationProps> = ({ elevation, className, children }) => (
    <StyledElevation elevation={elevation} className={className}>
        {children}
    </StyledElevation>
);

export default Elevation;
