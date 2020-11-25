import React, { FunctionComponent } from 'react';
import { StyledRoundButton } from './RoundButton.styles';
import { RoundButtonProps } from './types';

const RoundButton: FunctionComponent<RoundButtonProps> = ({ children, onClick, ...otherProps }) => (
    <StyledRoundButton onClick={onClick} {...otherProps}>
        {children}
    </StyledRoundButton>
);

export default RoundButton;
