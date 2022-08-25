import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@/components/Container/Container';
import { withLayout } from '@/layout/Layout';
import { Form } from '@/components/Form/Form';
// import { Vacancy } from '@/components/Vacancy/Vacancy';
import { IVacancies } from '@/components/Vacancy/Vacancy.props';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { Vacancy } from '@/components/Vacancy/Vacancy';

const Home: NextPage = (): JSX.Element => {
    const [vacancy, setVacancy] = useState<IVacancies[]>([]);

    const fetchProducts = async () => {
        try {
            // setError('');
            // setLoading(true);
            const response = await axios.get<IVacancies[]>(
                'http://127.0.0.1:5000/vacancy'
            );
            setVacancy(response.data);
        } catch (error) {
            // console.log(response.data);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <Head>
                <title>Vacancy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="my-auto flex grow ">
                <Container className="flex w-full flex-col pt-20 ">
                    <Form />
                    <ul className="pt-10">
                        {vacancy.map(
                            (r) =>
                                r.id == 1 && <Vacancy vacancy={r} key={r.id} />
                        )}
                    </ul>

                    {/* <Vacancy vacancy={vacancyTitle} /> */}
                </Container>
            </main>
        </>
    );
};

export default withLayout(Home);
