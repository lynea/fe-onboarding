import React, { FunctionComponent } from 'react';
import RoundButton from './sub-components/RoundButton';
import RoundedButton from './sub-components/RoundedButton';
import RegularButton from './sub-components/RegularButton';

import {} from './Botton.styles';
import { ButtonProps } from './types';

const Button: FunctionComponent<ButtonProps> = ({ type, children, text, handleClick, ...otherProps }) => (
    <>
        {
            {
                round: (
                    <RoundButton onClick={handleClick} {...otherProps}>
                        {children}
                    </RoundButton>
                ),
                rounded: (
                    <RoundedButton onClick={handleClick} text={text} {...otherProps}>
                        {children}
                    </RoundedButton>
                ),
                regular: (
                    <RegularButton onClick={handleClick} {...otherProps}>
                        {children}
                    </RegularButton>
                ),
            }[type]
        }
    </>
);
export default Button;
