interface Theme {
    colors: {
        main: {
            purple: {
                300: string;
                500: string;
            };
            blue: {
                300: string;
            };
            white: string;
        };
        greyScales: {
            grey: {
                100: string;
                200: string;
                300: string;
            };
        };
    };
}

const theme: Theme = {
    colors: {
        main: {
            purple: {
                300: '#6B2FAD',
                500: '#582391',
            },
            blue: {
                300: '#00DBDB',
            },
            white: '#FFFFFF',
        },
        greyScales: {
            grey: {
                100: '',
                200: '#FCF9F9',
                300: '#525252',
            },
        },
    },
};

export default theme;
