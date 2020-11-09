import styled, { css } from 'styled-components';
import { device } from '../../utils/media-queries';

type TextProps = {
    //** use custom string for custom font */
    family: 'book' | 'black' | 'string';
    sizes: {
        default: 100 | 200 | 300 | 400 | 500;
        sm?: 100 | 200 | 300 | 400 | 500;
        md?: 100 | 200 | 300 | 400 | 500;
        lg?: 100 | 200 | 300 | 400 | 500;
        xl?: 100 | 200 | 300 | 400 | 500;
    };
    weight: 100 | 200 | 300 | 400 | 500;
    //** only use when you want a custom src */
    src?: string;
};

const fontSizes = {
    100: css`
        font-size: 1.2rem;
        line-height: 1.4rem;
    `,
    200: css`
        font-size: 1.6rem;
        line-height: 1.8rem;
    `,
    300: css`
        font-size: 1.8rem;
        line-height: 2rem;
    `,
    400: css`
        font-size: 2.4rem;
        line-height: 2.4rem;
    `,
    500: css`
        font-size: 4.8rem;
        line-height: 2.4rem;
    `,
};

const defaultFont = 'Arial, Helvetica, sans-serif;';

const families = {
    book: `Rubic, ${defaultFont}`,
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

    ${({ sizes }) => fontSizes[sizes.default]};
    font-family: ${({ family }) => (family === 'book' || family === 'black' ? families[family] : family)};
    font-weight: ${({ weight }) => weight};

    @media only screen and (${device.sm}) {
        ${({ sizes }) => (sizes.sm ? fontSizes[sizes.sm] : null)};
    }
    @media only screen and (${device.md}) {
        ${({ sizes }) => (sizes.md ? fontSizes[sizes.md] : null)};
    }

    @media only screen and (${device.lg}) {
        ${({ sizes }) => (sizes.lg ? fontSizes[sizes.lg] : null)};
    }

    @media only screen and (${device.xl}) {
        ${({ sizes }) => (sizes.xl ? fontSizes[sizes.xl] : null)};
    }
`;

export default Text;
