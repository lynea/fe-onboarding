import React, { FunctionComponent } from 'react';
import { StyledSidepanel, StyledInnerContainer } from './SidePanel.styles';
import { MenuItemProps, IMenuItem } from './sub-components/MenuItem';
import MenuItem from './sub-components/MenuItem';
import { faTimes, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SidePanelProps {
    menuItems: IMenuItem[];
    onMenuItemClicked?: () => void;
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
}) => {
    return (
        <StyledSidepanel isOpen={isOpen} className={className}>
            <FontAwesomeIcon
                icon={faTimes}
                className="close"
                onClick={onCloseClick}
                role="button"
                aria-label="close menu"
            />
            <FontAwesomeIcon
                icon={faArrowCircleLeft}
                className="collapse"
                onClick={onCloseClick}
                role="button"
                aria-label="collapse menu"
            />
            <StyledInnerContainer>
                {menuItems.map((menuItem: MenuItemProps, index) => (
                    <MenuItem
                        showIcon={isOpen}
                        onItemClick={onMenuItemClicked}
                        key={menuItem.text + index}
                        href={menuItem.href}
                        target={menuItem.target}
                        text={menuItem.text}
                    />
                ))}
            </StyledInnerContainer>
        </StyledSidepanel>
    );
};

export default SidePanel;
