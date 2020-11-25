import { StyledCardContainer, ButtonContainer } from './ExplainationCard.styles';
import TextContainer from './TextContainer';
import React from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

//TODO: add text prop , title etc and inner container
// image option (next 10)

export type ExplainationCardProps = {
    TextContainerObj: any;
};

const ExplainationCard: React.FC<ExplainationCardProps> = ({ TextContainerObj }) => {
    const router = useRouter();
    const currentStep = Number(router.query.step);

    return (
        <StyledCardContainer>
            <TextContainer TextContainerObj={TextContainerObj}></TextContainer>
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
        </StyledCardContainer>
    );
};

export default ExplainationCard;
