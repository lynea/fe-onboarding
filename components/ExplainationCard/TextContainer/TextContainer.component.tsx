import React, { FunctionComponent } from 'react';
import { StyledTextContainer, Paragraph, Title, SubTitle, ButtonContainer } from './index';
import Text from '../../Text';
import CodeBlock from '../../CodeBlock';
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Link from 'next/link';

type TextContainerProps = {
    TextContainerObj: any;
};

//TODO : fix any typing and add remaining content

const TextContainer: FunctionComponent<TextContainerProps> = ({ TextContainerObj }) => {
    const router = useRouter();
    const currentStep = Number(router.query.step);

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
            <ButtonContainer>
                <Button type="round">
                    <Link href={`/onboarding/${currentStep - 1}`}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            role="button"
                            className="copy-button"
                            aria-label="copy to clip-board"
                        />
                    </Link>
                </Button>
                {/* //TODO: dont allow previous when current step = 1 and dont allow next step when current step == totalSteps */}
                <Button type="round">
                    <Link href={`/onboarding/${currentStep + 1}`}>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            role="button"
                            className="copy-button"
                            aria-label="copy to clip-board"
                        />
                    </Link>
                </Button>
            </ButtonContainer>
        </StyledTextContainer>
    );
};

export default TextContainer;
