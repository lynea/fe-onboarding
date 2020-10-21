import React, { FunctionComponent } from 'react';
import { StyledSidepanel, StyledInnerContainer } from './SidePanel.styles';
import { MenuItemProps, IMenuItem } from './sub-components/MenuItem';
import MenuItem from './sub-components/MenuItem';

export interface SidePanelProps {
    menuItems: IMenuItem[];
    onMenuItemClicked: () => void;
}

const SidePanel: FunctionComponent<SidePanelProps> = (menuItems, onMenuItemClicked) => {
    console.log(menuItems);

    return (
        <StyledSidepanel>
            <StyledInnerContainer>
                {menuItems.menuItems.map((menuItem: MenuItemProps, index) => (
                    <MenuItem
                        onItemClick={onMenuItemClicked}
                        key={menuItem.text + index}
                        href={menuItem.href}
                        target={menuItem.target}
                        text={menuItem.text}
                    ></MenuItem>
                ))}
            </StyledInnerContainer>
        </StyledSidepanel>
    );
};

export default SidePanel;
