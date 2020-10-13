import React, { FunctionComponent, ReactNode } from 'react';
import { StyledMainContainer, StyledContentContainer, StyledSidePanelContainer } from './MainLayout.styles';

const MainLayout: FunctionComponent = ({ children }) => (
    <>
        <StyledMainContainer>
            <StyledSidePanelContainer></StyledSidePanelContainer>
            <StyledContentContainer>{children}</StyledContentContainer>
        </StyledMainContainer>
    </>
);

export default MainLayout;
