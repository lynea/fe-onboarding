import { StyledCardContainer } from './ExplainationCard.styles';
import TextContainer from './TextContainer';
import TextContainerObj from '../../mocks/TextContainerMocks';
import React from 'react';

//TODO: add text prop , title etc and inner container
// image option (next 10)

export type ExplainationCardProps = {};

const ExplainationCard: React.FC<ExplainationCardProps> = ({}) => {
    return (
        <StyledCardContainer>
            <TextContainer TextContainerObj={TextContainerObj}></TextContainer>
        </StyledCardContainer>
    );
};

export default ExplainationCard;
