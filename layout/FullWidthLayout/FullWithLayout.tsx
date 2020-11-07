import React, { FunctionComponent } from 'react';
import { StyledFullWidthContainer } from './FullWidthLayout.styles';

const FullWidthLayout: FunctionComponent = ({ children }) => (
    <StyledFullWidthContainer>{children}</StyledFullWidthContainer>
);

export default FullWidthLayout;
