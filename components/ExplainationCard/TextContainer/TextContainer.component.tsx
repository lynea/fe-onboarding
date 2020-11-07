import React, { FunctionComponent } from 'react';
import { TextContainerProps } from './types';
import { StyledTextContainer, Paragraph, Title, SubTitle } from './index';
import Text from '../../Text';
import CodeBlock from '../../CodeBlock';

const TextContainer: FunctionComponent<TextContainerProps> = ({ TextContainerObj }) => (
    <StyledTextContainer>
        <Text as="h1" weight={100} family="book" sizes={{ default: 100 }}>
            {TextContainerObj.title}
        </Text>
        {TextContainerObj.paragraphs.map((paragraph, index) => (
            <div key={paragraph.title + index}>
                <Text as="h2" weight={100} family="book" sizes={{ default: 100 }}>
                    {paragraph.title}
                </Text>
                <Text as="p" weight={100} family="book" sizes={{ default: 100 }}>
                    {' '}
                    {paragraph.body?.text}
                </Text>
                <CodeBlock language={'javascript'} value="<Component></component>" />
            </div>
        ))}
    </StyledTextContainer>
);

export default TextContainer;
