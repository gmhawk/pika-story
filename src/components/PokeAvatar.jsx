import React from "react";
import { Avatar } from "@mui/material";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const themeTypes = {
    light: 'light',
    dark: 'dark',
    ditto: 'ditto',
}

const StyledAvatar = styled(Avatar)({
    width: '186px',
    height: '186px',
})

const PokeAvatar = () => {
    const theme = useTheme();

    if(theme.palette.name === themeTypes.light) {
        return (
            <StyledAvatar alt="pikachu-avatar" src="src/components/assets/pikachu-avatar.png" />
        );
    }

    if(theme.palette.name === themeTypes.dark) {
        return (
            <StyledAvatar alt="gengar-avatar" src="src/components/assets/gengar-avatar.png" />
        );
    }

    if(theme.palette.name === themeTypes.ditto) {
        return (
            <StyledAvatar alt="ditto-avatar" src="src/components/assets/ditto-avatar.jpg" />
        );
    }
};

export default PokeAvatar;