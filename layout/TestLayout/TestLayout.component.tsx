import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, StyledMenuContainer, StyledSubBar, Topbar, Footer } from './TestLayout.styles';

const TestLayout: FunctionComponent = ({ children }) => (
    <>
        <StyledMenuContainer>
            <StyledMenuContainer>
                <StyledSubBar />
                <Topbar />
            </StyledMenuContainer>
        </StyledMenuContainer>
        <Grid>{children}</Grid>
        <Footer></Footer>
    </>
);

export default TestLayout;
