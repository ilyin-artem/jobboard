import clsx from 'clsx';
import { InputProps } from './Input.props';

const baseStyles = {
    solid: 'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm',
    noBorder:
        'block w-full appearance-none py-2 px-3 text-gray-900 placeholder:text-gray-400  focus:outline-none  sm:text-sm',
};

export function Input({
    id,
    label,
    type = 'text',
    variant = 'solid',
    className,
    ...props
}: InputProps): JSX.Element {
    return (
        <>
            {label && (
                <label
                    htmlFor={id}
                    className={clsx(
                        'mb-3 block text-sm font-medium text-gray-700',
                        className
                    )}
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                {...props}
                className={clsx(baseStyles[variant], className)}
            />
        </>
    );
}
