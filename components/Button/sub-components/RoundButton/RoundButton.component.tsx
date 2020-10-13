import React, { FunctionComponent } from 'react';
import { StyledRoundButton } from './RoundButton.styles';
import { RoundButtonProps } from './types';

const RoundButton: FunctionComponent<RoundButtonProps> = ({ children, onClick }) => (
    <StyledRoundButton onClick={onClick}>{children}</StyledRoundButton>
);

export default RoundButton;
