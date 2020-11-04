import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { StyledCodeBlock } from './index';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';

type CodeBlockProps = {
    language: string;
    value: string;
};

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ language, value }) => (
    <StyledCodeBlock>
        <SyntaxHighlighter language={language} style={dracula}>
            {value}
        </SyntaxHighlighter>
    </StyledCodeBlock>
);
export default CodeBlock;
