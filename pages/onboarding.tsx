import React from 'react';
import MainLayout from '../layout/MainLayout';
import styled from 'styled-components';
import Elevation from '../components/Elevation';

const StyledElevation = styled(Elevation)`
    height: 50rem;
    width: 90%;
    background: white;
`;

const Onboarding = () => (
    <MainLayout>
        <StyledElevation elevation={1}></StyledElevation>
    </MainLayout>
);

export default Onboarding;
