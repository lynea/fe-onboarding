import React, { FunctionComponent } from 'react';
import { StyledMainContainer, StyledContentContainer, StyledSidePanelContainer } from './MainLayout.styles';
import SidePanel from '../components/SidePanel';

const SideBarDto = [
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
];

const MainLayout: FunctionComponent = ({ children }) => (
    <>
        <StyledMainContainer>
            <StyledSidePanelContainer>
                <SidePanel onMenuItemClicked={() => console.log('test')} menuItems={SideBarDto}></SidePanel>
            </StyledSidePanelContainer>
            <StyledContentContainer>{children}</StyledContentContainer>
        </StyledMainContainer>
    </>
);

export default MainLayout;
