import React, { FunctionComponent } from 'react';
import { TextContainerProps } from './types';
import { StyledTextContainer, Paragraph, Title, SubTitle } from './index';

const TextContainer: FunctionComponent<TextContainerProps> = ({ TextContainerObj }) => (
    <StyledTextContainer>
        <h2>{TextContainerObj.title}</h2>
        {TextContainerObj.paragraphs.map((paragraph) => (
            <>
                <SubTitle>{paragraph.title}</SubTitle>
                <Paragraph key={paragraph.title}>{paragraph.body?.text}</Paragraph>
            </>
        ))}
    </StyledTextContainer>
);

export default TextContainer;