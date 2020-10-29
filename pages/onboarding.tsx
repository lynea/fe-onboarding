import React from 'react';
import MainLayout from '../layout/MainLayout';
import Elevation from '../components/Elevation';
import ExplainationCard from '../components/ExplainationCard';

const Onboarding = () => (
    <MainLayout>
        <Elevation elevation={1}>
            <ExplainationCard></ExplainationCard>
        </Elevation>
    </MainLayout>
);

export default Onboarding;
