import React, { FunctionComponent } from 'react';
import RoundButton from './sub-components/RoundButton';
import RoundedButton from './sub-components/RoundedButton';
import RegularButton from './sub-components/RegularButton';

import {} from './Botton.styles';
import { ButtonProps } from './types';

const Button: FunctionComponent<ButtonProps> = ({ type, children, text, ...otherProps }) => (
    <>
        {
            {
                round: <RoundButton>{children}</RoundButton>,
                rounded: <RoundedButton text={text}>{children}</RoundedButton>,
                regular: <RegularButton>{children}</RegularButton>,
            }[type]
        }
    </>
);
export default Button;
