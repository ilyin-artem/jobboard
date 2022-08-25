import { ReactNode } from 'react';

export interface ContainerProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}
