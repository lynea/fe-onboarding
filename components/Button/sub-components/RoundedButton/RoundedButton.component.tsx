import React, { FunctionComponent } from 'react';
import { StyledRoundedButton } from './RoundedButton.styles';
import { RoundedButtonProps } from './types';

const RoundedButton: FunctionComponent<RoundedButtonProps> = ({ children, text }) => (
    <StyledRoundedButton>
        <p>{text}</p>
        {children}
    </StyledRoundedButton>
);

export default RoundedButton;
