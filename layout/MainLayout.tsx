import React, { FunctionComponent, useState } from 'react';
import { StyledMainContainer, StyledContentContainer, StyledSidePanelContainer } from './MainLayout.styles';
import SidePanel from '../components/SidePanel';
import { menuItems } from '../mocks/MenuMocks';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainLayout: FunctionComponent = ({ children }) => {
    const [isMenuOpen, SetIsMenuOpen] = useState(false);
    const OnMenuToggle = () => SetIsMenuOpen(!isMenuOpen);

    return (
        <>
            <StyledMainContainer>
                <FontAwesomeIcon className="menuToggle" onClick={OnMenuToggle} icon={faBars}></FontAwesomeIcon>
                <StyledSidePanelContainer isMenuOpen={isMenuOpen}>
                    <SidePanel
                        onCloseClick={OnMenuToggle}
                        isOpen={isMenuOpen}
                        onMenuItemClicked={() => console.log('test')}
                        menuItems={menuItems}
                    ></SidePanel>
                </StyledSidePanelContainer>
                <StyledContentContainer>{children}</StyledContentContainer>
            </StyledMainContainer>
        </>
    );
};
export default MainLayout;
