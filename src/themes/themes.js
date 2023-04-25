import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
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

// export const dittoTheme = createTheme({
//     palette: {
//         mode: "ditto", // Need to be extended
//     },
//     components: {
//         MuiRating: {
//             styleOverrides: {
//                 root: {
//                     backgroundColor: 'green',
//                 },
//             },
//         },
//     }
// });