import React, { useState, FunctionComponent } from 'react';
import { StyledMenuItem } from './MenuItem.styles';
import { MenuItemProps } from './types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
//TODO:make it accept a custom icon
const MenuItem: FunctionComponent<MenuItemProps> = ({ children, href, text, iconName, onItemClick }) => {
    const [active, setActive] = useState(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        onItemClick();
        setActive(true);
    };

    return (
        <StyledMenuItem className={active ? 'active' : ''} onClick={handleClick}>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <Link href={href}>{text}</Link>
        </StyledMenuItem>
    );
};
export default MenuItem;
