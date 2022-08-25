export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    name: string;
    type: React.HTMLInputTypeAttribute;
    variant?: 'solid' | 'noBorder';
    autoComplete?: string;
    required?: boolean;

    className?: string;
}
