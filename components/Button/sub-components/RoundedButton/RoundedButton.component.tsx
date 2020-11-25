import React, { FunctionComponent } from 'react';
import { StyledRoundedButton } from './RoundedButton.styles';
import { RoundedButtonProps } from './types';

const RoundedButton: FunctionComponent<RoundedButtonProps> = ({ children, onClick, text, ...otherProps }) => (
    <StyledRoundedButton onClick={onClick} {...otherProps}>
        {children}
        <p>{text}</p>
    </StyledRoundedButton>
);

export default RoundedButton;
