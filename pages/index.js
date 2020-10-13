import React from 'react';
import Head from 'next/head';
import Button from '../components/Button/Botton.component';
import { faLongArrowAltRight, faSearch, faStar, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FullWidthLayout from '../layout/FullWithLayout';
import { ButtonContainer, StyledHeader, TextContainer, CenteredImage } from '../layout/MainLayout.styles';
import { Router, useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Mijndomein onboarding</title>
            </Head>

            <FullWidthLayout>
                <StyledHeader>
                    <TextContainer>
                        {' '}
                        <h1> Hi, Edwin</h1> <h2>What do you want to do?</h2>{' '}
                    </TextContainer>
                    <CenteredImage src="./laptop.svg" />
                </StyledHeader>
                <ButtonContainer>
                    <Button type="rounded" className="ghost" text="Skillfinder">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Button
                        type="rounded"
                        className="ghost"
                        text="Onboarding"
                        handleClick={() => router.push('./onboarding')}
                    >
                        <FontAwesomeIcon icon={faStar} />
                    </Button>

                    <Button type="rounded" className="ghost" text="Dictionary">
                        <FontAwesomeIcon icon={faBook} />
                    </Button>
                    <Button type="rounded" className="ghost" text="Other thing">
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Button>
                </ButtonContainer>
            </FullWidthLayout>
        </>
    );
}
