import { createTheme } from '@mui/material/styles';

// declare module '@mui/material/styles/createPalette' {
//     interface PaletteOptions {
//         name?: string,
//     }
// }

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        name: 'dark',
        gengar: {},
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                },
            },
        },
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        name: 'light',
        pikachu: {
            yellow: '#FDDC00',
            black: '#000000',
        },
    },
    components: {
        MuiRating: {
            styleOverrides: {
                root: {
                },
            },
        },
    }
});

export const dittoTheme = createTheme({
    palette: {
        mode: 'light',
        name: 'ditto',
        ditto: {
            purple: '#C346FF',
            black: '#000000',
        },
    },
    components: {
        MuiRating: {
            styleOverrides: {
                root: {
                },
            },
        },
    }
});