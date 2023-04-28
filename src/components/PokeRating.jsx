import React from "react";
import { useTheme } from "@mui/material";
import { Rating } from "@mui/material";
import DittoSelected from './assets/ditto-select.svg';
import DittoUnselect from './assets/ditto-unselect.svg';
import PikachuSelected from './assets/pikachu_selected.svg';
import PikachuUnselect from './assets/pikachu_unselected.svg';

const themeTypes = {
    light: 'light',
    dark: 'dark',
    ditto: 'ditto',
}

const PokeRating = (props) => {
    const theme = useTheme();

    console.log(theme.palette.name);
    if(theme.palette.name === themeTypes.ditto) {
        return (
            <Rating 
                icon={
                  <img src={DittoSelected} alt='ditto' />
                }
                emptyIcon={
                  <img src={DittoUnselect} alt='ditto' />
                }
                {...props}
            />
        );
    }

    if(theme.palette.name === themeTypes.light) {
        return (
            <Rating 
                icon={
                    <img src={PikachuSelected} alt='pikachu' />
                }
                emptyIcon={
                    <img src={PikachuUnselect} alt='pikachu' />
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