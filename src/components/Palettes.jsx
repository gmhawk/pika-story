import React from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const ColoredPaper = styled(Paper)({
    width: '36px',
    height: '36px',
})

const PaletteItem = (props) => {
    return(
        <Grid item>
            <ColoredPaper {...props} />
        </Grid>
    );
}

const Palettes = () => {
    return(
        <Grid container spacing={2}>
            <PaletteItem 
                sx={{
                    backgroundColor: 'pokemon.primary',
                }}
            />
            <PaletteItem 
                sx={{
                    backgroundColor: 'pokemon.secondary',
                }}
            />
            <PaletteItem 
                sx={{
                    backgroundColor: 'pokemon.dark',
                }}
            />
            <PaletteItem 
                sx={{
                    backgroundColor: 'pokemon.black',
                }}
            />
        </Grid>
    );
}

export default Palettes;