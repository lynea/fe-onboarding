import React, { FunctionComponent, useRef, useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { StyledCodeBlock, SuccesMessageContainer } from './CodeBlock.styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text';

type CodeBlockProps = {
    language: string;
    value: string;
};

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ language, value }) => {
    const codeContentRef = useRef<HTMLDivElement>(null);

    const [renderWatcher, setRenderWatcher] = useState(0);
    const [copySuccesMessage, setCopySuccesMessage] = useState(false);
    let copyString;

    const onCopyClicked = () => {
        setCopySuccesMessage(true);
        setTimeout(() => {
            setCopySuccesMessage(false);
        }, 2000);
    };
    //TODO: fix any
    if (codeContentRef && codeContentRef.current) {
        copyString = codeContentRef.current.textContent as any;
    }

    useEffect(() => {
        setRenderWatcher(renderWatcher + 1);
    }, []);

    return (
        <>
            <StyledCodeBlock>
                <CopyToClipboard text={copyString} onCopy={onCopyClicked}>
                    <FontAwesomeIcon
                        icon={faCopy}
                        role="button"
                        className="copy-button"
                        aria-label="copy to clip-board"
                    />
                </CopyToClipboard>

                <span ref={codeContentRef}>
                    <SyntaxHighlighter language={language} style={dracula}>
                        {value}
                    </SyntaxHighlighter>
                </span>
            </StyledCodeBlock>
            <SuccesMessageContainer isVisible={copySuccesMessage}>
                <Text as="p" weight={100} family="book" sizes={{ default: 100 }}>
                    {' '}
                    copied to clipboard!
                </Text>
            </SuccesMessageContainer>
        </>
    );
};
export default CodeBlock;
