import React from "react";
import { useTheme } from "@mui/material";
import { Rating } from "@mui/material";
import DittoSelect from "./assets/ditto-select";
import DittoUnselect from './assets/ditto-unselect';
import PikachuSelect from './assets/pikachu-select';
import PikachuUnselect from './assets/pikachu-unselect';

const themeTypes = {
    light: 'light',
    dark: 'dark',
    ditto: 'ditto',
}

const PokeRating = (props) => {
    const theme = useTheme();

    if(theme.palette.name === themeTypes.ditto) {
        return (
            <Rating 
                icon={
                    <DittoSelect fontSize="inherit" />
                }
                emptyIcon={
                    <DittoUnselect fontSize="inherit" />
                }
                {...props}
            />
        );
    }

    if(theme.palette.name === themeTypes.light) {
        return (
            <Rating 
                icon={
                    <PikachuSelect fontSize="inherit" />
                }
                emptyIcon={
                    <PikachuUnselect fontSize="inherit" />
                }
                {...props}
            />
        );
    }

    return(
        <Rating {...props}/>
    );
}

export default PokeRating;