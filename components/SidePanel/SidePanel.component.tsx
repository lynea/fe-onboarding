import { StringifyOptions } from 'querystring';
import React, { FunctionComponent } from 'react';

export interface SidePanelProps {
    menuItems: MenuItem[];
    onMenuItemClicked: () => void;
}

export interface MenuItem {
    href: string;
    text: string;
    target: '_blank' | string;
}

const SidePanel: FunctionComponent<SidePanelProps> = (menuItems, onMenuItemClicked) => <></>;

export default SidePanel;
