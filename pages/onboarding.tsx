import React from 'react';
import MainLayout from '../layout/MainLayout';
import ExplainationCard from '../components/ExplainationCard';
import Text from '../components/Text';

const Onboarding = () => (
    <MainLayout>
        <ExplainationCard></ExplainationCard>
        <Text family="book" size={100} weight={100}>
            Test text
        </Text>
        <Text family="book" size={400} weight={400}>
            Test text
        </Text>
    </MainLayout>
);

export default Onboarding;
