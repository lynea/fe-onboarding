import React, { FunctionComponent, useRef, useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { StyledCodeBlock } from './index';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

type CodeBlockProps = {
    language: string;
    value: string;
};

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ language, value }) => {
    const codeContentRef = useRef<HTMLDivElement>(null);

    const [renderWatcher, setRenderWatcher] = useState(0);
    let copyString;

    //TODO: fix any
    if (codeContentRef && codeContentRef.current) {
        copyString = codeContentRef.current.textContent as any;
    }

    useEffect(() => {
        setRenderWatcher(renderWatcher + 1);
    }, []);

    return (
        <StyledCodeBlock>
            <CopyToClipboard text={copyString} onCopy={() => console.log('copied')}>
                <FontAwesomeIcon icon={faCopy} role="button" className="copy-button" aria-label="copy to clip-board" />
            </CopyToClipboard>

            <span ref={codeContentRef}>
                <SyntaxHighlighter language={language} style={dracula}>
                    {value}
                </SyntaxHighlighter>
            </span>
        </StyledCodeBlock>
    );
};
export default CodeBlock;
