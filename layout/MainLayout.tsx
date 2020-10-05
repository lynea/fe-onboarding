import React, {FunctionComponent, ReactNode} from "react";
import {StyledMainContainer, StyledContentContainer, StyledSidePanelContainer,StyledTopMenuContainer} from './MainLayout.styles'; 



const MainLayout:FunctionComponent = ({children}) => 
    <>
    <StyledTopMenuContainer></StyledTopMenuContainer>
    <StyledMainContainer>
        <StyledSidePanelContainer>

        </StyledSidePanelContainer>
        <StyledContentContainer>
            {children}
        </StyledContentContainer>
    </StyledMainContainer>
    </>


export default MainLayout; 