module.exports = (api) => {
    api.cache(true);

    return {
        presets: [
            [
                '@babel/env',
                {
                    corejs: 3,
                    targets: {
                        browsers: 'Last 2 Chrome versions, Firefox ESR',
                        node: 'current',
                    },
                },
            ],
            [
                '@babel/preset-react',
                {
                    development: process.env.BABEL_ENV !== 'build',
                },
            ],
            '@babel/preset-typescript',
        ],
        env: {
            build: {
                ignore: [
                    '**/*.test.tsx',
                    '**/*.test.ts',
                    '**/*.story.tsx',
                    '__snapshots__',
                    '__tests__',
                    '__stories__',
                ],
            },
        },
        ignore: ['node_modules'],
        plugins: ['@babel/plugin-transform-modules-commonjs', ['babel-plugin-styled-components', { fileName: false }]],
    };
};
