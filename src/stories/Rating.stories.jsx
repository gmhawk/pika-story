
import React from 'react';
import { Grid } from "@mui/material";
import Showcase from './Showcase';
import PokeRating from '../components/PokeRating';

export default {
  title: 'Design System',
};

export const Pokemon = {
  render: () => (
    <Grid container spacing={2}>
      <Showcase title="Rating">
        <PokeRating 
            name="rating"
            size="large"
            defaultValue={3}
        />
      </Showcase>
      <Showcase title="Rating">
          <PokeRating 
              name="rating"
              size="large"
              defaultValue={3}
          />
        </Showcase>
    </Grid>
  ),
};