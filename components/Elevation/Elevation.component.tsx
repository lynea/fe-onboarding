import { ElevationProps } from './types';
import styled, { css } from 'styled-components';
import React, { FunctionComponent } from 'react';

export const StyledElevation = styled.span<ElevationProps>`
    display: block;
    height: fit-content;
    width: fit-content;

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
