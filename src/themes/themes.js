import { createTheme } from '@mui/material/styles';
import { yellow, deepPurple, red, purple } from '@mui/material/colors';

// declare module '@mui/material/styles/createPalette' {
//     interface PaletteOptions {
//         name?: string,
//     }
// }

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        name: 'dark',
        pokemon: {
            primary: deepPurple['800'],
            secondary: red['400'],
            dark: deepPurple['900'],
            black: '#000000',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: ({ theme }) => ({
                    backgroundColor: theme.palette.pokemon.primary,
                    color: theme.palette.pokemon.black,
                    '&:hover': {
                        backgroundColor: theme.palette.pokemon.dark,
                    },
                }),
                
            },
        },
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        name: 'light',
        pokemon: {
            primary: yellow['A400'],
            secondary: red['500'],
            dark: yellow['A700'],
            black: '#000000',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: ({ theme }) => ({
                    backgroundColor: theme.palette.pokemon.primary,
                    color: theme.palette.pokemon.black,
                    '&:hover': {
                        backgroundColor: theme.palette.pokemon.dark,
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
        pokemon: {
            primary: deepPurple['A100'],
            secondary: purple['200'],
            dark: deepPurple['A200'],
            black: '#000000',
        },
    },
    typography: {
        fontFamily: 'Aladin, Roboto',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: ({ theme }) => ({
                    backgroundColor: theme.palette.pokemon.primary,
                    color: theme.palette.pokemon.black,
                    '&:hover': {
                        backgroundColor: theme.palette.pokemon.dark,
                    },
                }),
                
            },
        },
    }
});