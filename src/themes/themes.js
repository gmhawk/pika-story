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