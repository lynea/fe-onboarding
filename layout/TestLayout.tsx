import React from 'react';
import { Grid, Footer, ContentContainer, TopBar } from './TestLayout.styles';

const TestLayout = ({ children }) => (
    <Grid>
        <TopBar></TopBar>
        <ContentContainer>{children}</ContentContainer>
        <Footer></Footer>
    </Grid>
);

export default TestLayout;
