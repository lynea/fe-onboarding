import React from 'react';
import MainLayout from '../../layout/MainLayout';
import ExplainationCard from '../../components/ExplainationCard';
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
            {OnboardingItems.map((step: any, index: any) => {
                //TODO: think out routing logic for each step and pass to explainationCard
                return (
                    <div key={index + step.fields.step}>
                        <ExplainationCard key={step.fields.step}></ExplainationCard>
                    </div>
                );
            })}
        </MainLayout>
    );
};

export async function getStaticPaths() {
    const fetchEntries = async () => {
        const entries = await client.getEntries();
        if (entries.items) return entries.items;
    };

    const OnboardingItems = await fetchEntries();
    //TODO: remove any
    const paths = OnboardingItems.map((item: any) => ({ params: { step: `${item.fields.step}` } }));

    return {
        paths: paths,
        fallback: false,
    };
}
//TODO: fetch data based on params step for the current step
export const getStaticProps: GetStaticProps = async (params) => {
    const fetchEntries = async () => {
        const entries = await client.getEntries();
        if (entries.items) return entries.items;
    };

    const OnboardingItems = await fetchEntries();

    return {
        props: {
            OnboardingItems,
        },
    };
};

export default Onboarding;
