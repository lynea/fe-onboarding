import React, { FunctionComponent } from 'react';
import { StyledSidepanel } from './SidePanel.styles';
import { MenuItemProps } from './sub-components/MenuItem';
import MenuItem from './sub-components/MenuItem';

export interface SidePanelProps {
    menuItems: MenuItemProps[];
    onMenuItemClicked: () => void;
}

const SidePanel: FunctionComponent<SidePanelProps> = (menuItems, onMenuItemClicked) => {
    console.log(menuItems);

    return (
        <StyledSidepanel>
            {menuItems.menuItems.map((menuItem: MenuItemProps, index) => (
                <MenuItem
                    key={menuItem.text + index}
                    href={menuItem.href}
                    target={menuItem.target}
                    text={menuItem.text}
                ></MenuItem>
            ))}
        </StyledSidepanel>
    );
};

export default SidePanel;
