import styled, { css } from 'styled-components';

type TextProps = {
    //** use custom string for custom font */
    family: 'book' | 'black' | 'string';
    size: 100 | 200 | 300 | 400 | 500;
    weight: 100 | 200 | 300 | 400 | 500;
    //** only use when you want a custom src */
    src?: string;
};

const sizes = {
    100: css`
        font-size: 1.2rem;
        line-height: 1.1rem;
    `,
    200: css`
        font-size: 1.6rem;
        line-height: 1.6rem;
    `,
    300: css`
        font-size: 1.8rem;
        line-height: 1.8rem;
    `,
    400: css`
        font-size: 2.4rem;
        line-height: 2.4rem;
    `,
    500: css`
        font-size: 2.4rem;
        line-height: 2.4rem;
    `,
};

const defaultFont = 'font-family: Arial, Helvetica, sans-serif;';

const families = {
    book: `circular-book, ${defaultFont}`,
    black: `circular-black, ${defaultFont}`,
};

export const Text = styled.span<TextProps>`
    @font-face {
        font-family: 'circular-black';
        src: url(${(props) => props.src || '/fonts/OpenSans-Regular-webfont.woff2'}) format('woff2'),
            url(${(props) => props.src || '/fonts/OpenSans-Regular-webfont.woff2'}) format('woff');
    }

    @font-face {
        font-family: 'circular-book';
        src: url(${(props) => props.src || '/fonts/OpenSans-Regular-webfont.woff2'}) format('woff2'),
            url(${(props) => props.src || '/fonts/OpenSans-Regular-webfont.woff2'}) format('woff');
    }

    ${({ size }) => sizes[size]};
    font-family: ${({ family }) => (family === 'book' || family === 'black' ? families[family] : family)};
    font-weight: ${({ weight }) => weight};
`;

export default Text;
