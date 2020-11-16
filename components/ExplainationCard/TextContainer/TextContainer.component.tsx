import React, { FunctionComponent } from 'react';
import { StyledTextContainer, Paragraph, Title, SubTitle } from './index';
import Text from '../../Text';
import CodeBlock from '../../CodeBlock';

type TextContainerProps = {
    TextContainerObj: any;
};

//TODO : fix any typing and add remaining content

const TextContainer: FunctionComponent<TextContainerProps> = ({ TextContainerObj }) => {
    return (
        <StyledTextContainer>
            <Text as="h1" weight={100} family="book" sizes={{ default: 400 }}>
                {TextContainerObj.title}
            </Text>
            {TextContainerObj.onboardingBody.content.map((item: any, index: any) => (
                <div key={index}>
                    <Text as="p" weight={100} family="book" sizes={{ default: 100 }}>
                        {' '}
                        {item.content[0].value}
                    </Text>
                </div>
            ))}
            <CodeBlock language={'javascript'} value="<Component></component>" />
        </StyledTextContainer>
    );
};

export default TextContainer;
