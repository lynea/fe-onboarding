import React, { FunctionComponent } from 'react';
import { StyledMenuItem } from './MenuItem.styles';
import { MenuItemProps } from './types';

const MenuItem: FunctionComponent<MenuItemProps> = ({ children, href, target, text }) => (
    <StyledMenuItem>
        <a href={href} target={target}>
            {text}
        </a>
        {children}
    </StyledMenuItem>
);

export default MenuItem;
