import clsx from 'clsx';
import { ContainerProps } from './Container.props';
import { children } from 'react';

export function Container({
    children,
    className,
    ...props
}: ContainerProps): JSX.Element {
    return (
        <div
            className={clsx(
                'mx-auto max-w-[1440px] px-[10px] sm:px-6 lg:px-8 xl:px-[180px]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
