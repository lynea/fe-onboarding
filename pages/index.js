import React from 'react';
import Head from 'next/head';
import Button from '../components/Button/Botton.component';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainLayout from '../layout/MainLayout'

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>

            <MainLayout>
            <div>
            <Button type="round" className="ghost">
                <FontAwesomeIcon icon={faLongArrowAltRight} flip="horizontal" />
            </Button>
            <Button type="round" className="ghost">
                <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Button>
            <Button type="rounded" className="ghost" text="test">
                <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Button>
        </div>
            </MainLayout>
           
        </>
    );
}
