import React, { FunctionComponent } from 'react';
import { StyledMainContainer, StyledContentContainer, StyledSidePanelContainer } from './MainLayout.styles';
import SidePanel from '../components/SidePanel';

//TODO add to mocks file
const menuItems = [
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
    {
        href: './test',
        text: 'test',
        target: '_blank',
    },
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
                <SidePanel onMenuItemClicked={() => console.log('test')} menuItems={menuItems}></SidePanel>
            </StyledSidePanelContainer>
            <StyledContentContainer>{children}</StyledContentContainer>
        </StyledMainContainer>
    </>
);

export default MainLayout;
