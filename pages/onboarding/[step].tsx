import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout';
import ExplainationCard from '../../components/ExplainationCard';
import { GetStaticProps } from 'next';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});
//TODO: fix any typing
export type OnboardingProps = {
    onboardingItem: {
        title: string;
        step: number;
        mainImage: {
            sys: any;
            fields: {
                description: string;
                file: { url: string; title: string; details: { fileName: string; url: string } };
            };
        };
        onboardingBody: {
            content: [];
            data: { nodeType: string };
        };
        fields: any;
    };
};

const Onboarding = ({ onboardingItem }: OnboardingProps) => {
    return (
        <MainLayout>
            {
                <ExplainationCard
                    TextContainerObj={onboardingItem.fields ? onboardingItem.fields : null}
                ></ExplainationCard>
            }
        </MainLayout>
    );
};

export async function getStaticPaths() {
    const fetchEntries = async () => {
        const entries = await client.getEntries();
        if (entries.items) return entries.items;
    };

    const onboardingItems = await fetchEntries();
    const filteredItems = onboardingItems.filter((item: any) => (item.fields.step ? item.fields.step : null));
    //TODO: remove any
    const paths = filteredItems.map((item: any) => ({ params: { step: `${item.fields.step}` } }));
    console.log('paths:', paths);
    return {
        paths: paths,
        fallback: false,
    };
}
//TODO: fetch data based on params step for the current step
export const getStaticProps: GetStaticProps = async (params) => {
    console.log(params);
    const fetchEntries = async () => {
        const entries = await client.getEntries();
        if (entries.items) return entries.items;
    };

    const fetchedEntries = await fetchEntries();

    //get menuItems
    // get onboarding items

    // const OnboardingItems = fetchedEntries.filter((entry: any) => entry.sys.contentType.sys.id === 'onboardStep');
    const onboardingItem = fetchedEntries.find(
        (entry: any) => entry.fields.step && entry.fields.step == params?.params?.step,
    );

    return {
        props: {
            onboardingItem,
        },
    };
};

export default Onboarding;
