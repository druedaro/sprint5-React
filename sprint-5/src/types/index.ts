export interface ButtonProps {
    variante: 'primary' | 'secondary' | 'tertiary';
    children: string;
    onClick?: () => void;
    className?: string;
}

export interface NavItem {
    id: string;
    label: string;
    href: string;
}

export interface FeatureCard {
    id: string;
    title: string;
    description: string;
    image: string; 
}