export const breakpoints = {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1200,
};

const mediaQueries = (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | String) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

export default mediaQueries;
