import React, { FunctionComponent } from 'react';
import {} from './RegularBotton.styles';
import { RegularBottonProps } from './types';

const RegularBotton: FunctionComponent<RegularBottonProps> = ({ className }) => <button className={className}></button>;

export default RegularBotton;
