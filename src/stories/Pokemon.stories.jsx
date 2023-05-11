
import React from 'react';
import { Button, Grid } from "@mui/material";
import Showcase from './Showcase';
import PokeRating from '../components/PokeRating';
import Palettes from '../components/Palettes';

export default {
  title: 'Design System',
};

export const Pokemon = {
  render: () => (
    <Grid container spacing={2}>
      <Showcase title="Palettes">
        <Palettes />
      </Showcase>
      <Showcase title="Rating">
        <PokeRating 
            name="rating"
            size="large"
            defaultValue={3}
        />
      </Showcase>
      <Showcase title="Button">
          <Button variant='contained'>Button</Button>
      </Showcase>
    </Grid>
  ),
};