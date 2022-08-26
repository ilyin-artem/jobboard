import { LayoutProps } from './Layout.props';
import { Header } from '@/layout/Header/Header';
import { Footer } from '@/layout/Footer/Footer';
import { FunctionComponent } from 'react';

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <Header />
            <>
                {/* <Sidebar /> */}
                {children}
            </>
            <Footer />
        </>
    );
}

export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
