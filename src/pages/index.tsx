import type { NextPage } from 'next';
import Head from 'next/head';
import { ButtonLink } from '@/components/Button/Button';
import { Container } from '@/components/Container/Container';
import { withLayout } from '@/layout/Layout';
import { Form } from '@/components/Form/Form';

const Home: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>$1</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="my-auto flex grow ">
                <Container className="flex w-full flex-col xl:my-auto">
                    <h1 className="mt-auto mb-10 text-center text-lg xl:my-auto xl:mb-14 xl:text-5xl">
                        We just want to help you
                    </h1>

                    <Form className="mb-10 mt-4" />

                    {/* Buttons block */}
                    <div className="mt-auto mb-9 flex justify-center space-x-12 xl:mb-0">
                        <ButtonLink
                            href=""
                            color="white"
                            className="h-[60px] w-[280px]"
                        >
                            Create a vacancy
                        </ButtonLink>
                        <ButtonLink
                            href=""
                            color="white"
                            className="h-[60px] w-[280px]"
                        >
                            Create resume
                        </ButtonLink>
                    </div>
                </Container>
            </main>
        </>
    );
};

export default withLayout(Home);
