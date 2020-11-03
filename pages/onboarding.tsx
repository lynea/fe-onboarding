import React from 'react';
import MainLayout from '../layout/MainLayout';
import ExplainationCard from '../components/ExplainationCard';
import Text from '../components/Text';

import { GetStaticProps } from 'next';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});
//TODO: fix any typing
type OnboardingItems = any;

const Onboarding = ({ OnboardingItems }: OnboardingItems) => {
    return (
        <MainLayout>
            {OnboardingItems.map((step: any, index) => {
                //TODO: think out routing logic for each step and pass to explainationCard
                return (
                    <div key={index + step.fields.step}>
                        <Text family="book" defaultSize={100} weight={100}>
                            works bitches
                        </Text>
                        <ExplainationCard key={step.fields.step}></ExplainationCard>;
                    </div>
                );
            })}
        </MainLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const fetchEntries = async () => {
        const entries = await client.getEntries();
        if (entries.items) return entries.items;
    };

    const OnboardingItems = await fetchEntries();

    return {
        props: {
            OnboardingItems,
        }, // will be passed to the page component as props
    };
};

export default Onboarding;
