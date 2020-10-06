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
    breakPoints: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
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
    breakPoints: {
        xs: 600,
        sm: 960,
        md: 1280,
        lg: 1920,
    },
};

export default theme;
