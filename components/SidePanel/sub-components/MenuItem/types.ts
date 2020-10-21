
export interface MenuItemProps extends IMenuItem {
    onItemClick: () => void; 
}

export interface IMenuItem {
    href: string;
    text: string;
    target: '_blank' | string;
    iconName?:string; 
}

