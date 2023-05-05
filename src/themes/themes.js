import { createTheme } from '@mui/material/styles';
import { yellow, deepPurple } from '@mui/material/colors';

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
            yellow: yellow['A400'],
            black: '#000000',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: ({ theme }) => ({
                    backgroundColor: theme.palette.pikachu.yellow,
                    color: theme.palette.pikachu.black,
                    '&:hover': {
                        backgroundColor: yellow['A700'],
                    },
                }),
                
            },
        },
    }
});

export const dittoTheme = createTheme({
    palette: {
        mode: 'light',
        name: 'ditto',
        ditto: {
            purple: deepPurple['A100'],
            black: '#000000',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: ({ theme }) => ({
                    backgroundColor: theme.palette.ditto.purple,
                    color: theme.palette.ditto.black,
                    '&:hover': {
                        backgroundColor: deepPurple['A200'],
                    },
                }),
                
            },
        },
    }
});