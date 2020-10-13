import React, { FunctionComponent } from 'react';
import { StyledRoundedButton } from './RoundedButton.styles';
import { RoundedButtonProps } from './types';

const RoundedButton: FunctionComponent<RoundedButtonProps> = ({ children, onClick, text }) => (
    <StyledRoundedButton onClick={onClick}>
        {children}
        <p>{text}</p>
    </StyledRoundedButton>
);

export default RoundedButton;
