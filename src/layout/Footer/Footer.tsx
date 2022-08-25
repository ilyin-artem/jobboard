import { useRouter } from 'next/router';
import { FooterProps } from './Footer.props';

export function Footer({ ...props }: FooterProps): JSX.Element {
    const router = useRouter();
    const isHome = '/' === router.pathname;

    return <>{!isHome && <footer {...props}>Footer</footer>}</>;
}
