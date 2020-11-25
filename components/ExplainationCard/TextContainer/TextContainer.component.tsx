import React, { FunctionComponent } from 'react';
import { StyledTextContainer } from './TextContainer.styles';
import Text from '../../Text';
import CodeBlock from '../../CodeBlock';

type TextContainerProps = {
    TextContainerObj: any;
};

//TODO : fix any typing and add remaining content

const TextContainer: FunctionComponent<TextContainerProps> = ({ TextContainerObj }) => {
    return (
        <StyledTextContainer>
            <Text as="h1" weight={200} family="book" sizes={{ default: 400 }}>
                {TextContainerObj.title}
            </Text>
            {TextContainerObj.onboardingBody.content.map((item: any, index: any) => {
                const { nodeType } = item;

                if (nodeType === 'paragraph') {
                    return (
                        <div key={index}>
                            {' '}
                            <Text as={'p'} weight={100} family="book" sizes={{ default: 100 }}>
                                {item.content[0].value}
                            </Text>
                        </div>
                    );
                } else {
                    return (
                        <div key={index}>
                            {' '}
                            <Text as={'h2'} weight={100} family="book" sizes={{ default: 300 }}>
                                {item.content[0].value}
                            </Text>
                        </div>
                    );
                }
            })}
            <CodeBlock language={'javascript'} value="<Component></component>" />
        </StyledTextContainer>
    );
};

export default TextContainer;
