import React, { FunctionComponent } from 'react';
import { StyledRoundedButton } from './RoundedButton.styles';
import { RoundedButtonProps } from './types';

const RoundedButton: FunctionComponent<RoundedButtonProps> = ({ children, text }) => (
    <StyledRoundedButton>
        {children}
        <p>{text}</p>
    </StyledRoundedButton>
);

export default RoundedButton;
