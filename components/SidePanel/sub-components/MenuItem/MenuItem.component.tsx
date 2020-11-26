import React, { useState, FunctionComponent } from 'react';
import { StyledMenuItem } from './MenuItem.styles';
import { MenuItemProps } from './types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
//TODO:make it accept a custom icon
const MenuItem: FunctionComponent<MenuItemProps> = ({ children, href, text, iconName, onItemClick, showIcon }) => {
    const [active, setActive] = useState(false);
    console.log(showIcon);
    const handleClick = (e: any) => {
        e.preventDefault();
        if (onItemClick) {
            onItemClick();
        }
        setActive(true);
    };

    return (
        <StyledMenuItem className={active ? 'active' : ''} onClick={handleClick} showIcon={showIcon}>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            {showIcon && <Link href={href}>{text}</Link>}
            <span className="active-indicator"></span>
        </StyledMenuItem>
    );
};
export default MenuItem;
