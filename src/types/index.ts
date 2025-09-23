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

export interface FeatureCard {
    id: string;
    title: string;
    description: string;
    image: string; 
}

export interface EmailInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
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