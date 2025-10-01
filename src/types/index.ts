export interface IconProps {
    name: 'hamburger' | 'close' | 'facebook' | 'twitter';
    onClick?: () => void;
}

export interface LogoProps {
    white?: boolean;
}

export interface ButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary';
    children: string;
    onClick?: () => void;
    className?: string;
}

export interface NavItem {
    id: string;
    label: string;
    href: string;
}

export interface NavMenuProps {
    items: NavItem[];
}

export interface FeatureCard {
    id: string;
    title: string;
    description: string;
    image: string; 
}

export interface Browser {
    name: string;
    version: string;
    image: string;
}

export interface FaqItem {
    q: string;
    a: string;
}

export interface MobileMenuProps {
    items: NavItem[];
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
}