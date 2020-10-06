import React from 'react';
import Head from 'next/head';
import Button from '../components/Button/Botton.component';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FullWidthLayout from '../layout/FullWithLayout';
import { Row } from '../layout/MainLayout.styles';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>

            <FullWidthLayout>
                <Row>
                    <Button type="rounded" className="ghost" text="test">
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Button>
                    <Button type="rounded" className="ghost" text="test">
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Button>
                </Row>
                <Row>
                    <Button type="rounded" className="ghost" text="test">
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Button>
                    <Button type="rounded" className="ghost" text="test">
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Button>
                </Row>
            </FullWidthLayout>
        </>
    );
}
