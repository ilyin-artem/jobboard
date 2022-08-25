import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode;
    variant?: 'solid' | 'outline';
    color?: 'slate' | 'white' | 'blue';
    className?: string;
}
export interface ButtonLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    href: string;
    variant?: 'solid' | 'outline';
    color?: 'slate' | 'white' | 'blue';
    className?: string;
}
