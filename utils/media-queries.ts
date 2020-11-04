export const breakpoints = {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1200,
};

export const device = {
    sm: `(min-width: ${breakpoints.sm}px)`,
    md: `(min-width: ${breakpoints.md}px)`,
    lg: `(min-width: ${breakpoints.lg}px)`,
    xl: `(min-width: ${breakpoints.xl}px)`,
};

const mediaQueries = (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | String) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

export default mediaQueries;
