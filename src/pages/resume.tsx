import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@/components/Container/Container';
import { withLayout } from '@/layout/Layout';
import { Form } from '@/components/Form/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { IResume } from './../components/Resume/Resume.props';
import { Resume } from '@/components/Resume/Resume';

const Home: NextPage = (): JSX.Element => {
    const [resume, setResume] = useState<IResume[]>([]);
    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/resume');

        setResume(await response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <Head>
                <title>$1</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* {resum[2].name} */}
            {/* {resume.map((r) => (
                <Resume resume={r} />
            ))} */}

            {resume[0]?.name}
            {/* <Resume resume={resume[0]} /> */}
            <main className="my-auto flex grow ">
                <Container className="flex w-full flex-col pt-20 ">
                    <Form />
                    {/* {resume.map((r) => (
                        <Resume resume={r} />
                    ))} */}
                </Container>
            </main>
        </>
    );
};

export default withLayout(Home);
