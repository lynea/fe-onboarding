import React, { FunctionComponent } from 'react';
import { StyledSidepanel, StyledInnerContainer } from './SidePanel.styles';
import { MenuItemProps, IMenuItem } from './sub-components/MenuItem';
import MenuItem from './sub-components/MenuItem';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SidePanelProps {
    menuItems: IMenuItem[];
    onMenuItemClicked: () => void;
    onCloseClick: () => void;
    isOpen: boolean;
    className?: string;
}

const SidePanel: FunctionComponent<SidePanelProps> = ({
    menuItems,
    onMenuItemClicked,
    isOpen,
    onCloseClick,
    className,
    ...otherProps
}) => {
    return (
        <StyledSidepanel isOpen={isOpen} className={className}>
            <FontAwesomeIcon
                icon={faTimes}
                className="close"
                onClick={onCloseClick}
                role="button"
                aria-label="close menu"
            ></FontAwesomeIcon>
            <StyledInnerContainer>
                {menuItems.map((menuItem: MenuItemProps, index) => (
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
