import React, { FunctionComponent, useState } from 'react';
import { Grid, GridSidePanel, ContentContainer, StyledToggle } from './MainLayout.styles';
import { menuItems } from '../../mocks/MenuMocks';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainLayout: FunctionComponent = ({ children }) => {
    const [isMenuOpen, SetIsMenuOpen] = useState(false);
    const OnMenuToggle = () => SetIsMenuOpen(!isMenuOpen);

    const onMenuItemClicked = () => {
        console.log();
    };

    return (
        <>
            <StyledToggle>
                <FontAwesomeIcon className="menuToggle" onClick={OnMenuToggle} icon={faBars}></FontAwesomeIcon>
            </StyledToggle>
            <Grid>
                <GridSidePanel onCloseClick={OnMenuToggle} isOpen={isMenuOpen} menuItems={menuItems}></GridSidePanel>

                <ContentContainer>{children}</ContentContainer>
            </Grid>
        </>
    );
};
export default MainLayout;
