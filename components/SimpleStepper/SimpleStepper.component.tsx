import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type SimpleStepperProps = {
    totalSteps: number;
    currentStep: number;
};

const StepperWrapper = styled.div`
    height: 1rem;
    width: 100%;
`;

const InnerBar = styled.div<SimpleStepperProps>`
    width: ${({ currentStep, totalSteps }) => `${(currentStep / totalSteps) * 100}%`};
    height: 100%;

    background: ${(props) => props.theme.colors.main.blue[300]};
`;

const SimpleStepper: FunctionComponent<SimpleStepperProps> = (props) => (
    <StepperWrapper>
        <InnerBar {...props} />
    </StepperWrapper>
);

export default SimpleStepper;
