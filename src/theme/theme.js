import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: 'light', // TODO: Change to accept from user input
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

export default theme;
