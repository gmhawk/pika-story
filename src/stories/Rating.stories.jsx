
import React from 'react';
import { Grid, Box } from "@mui/material";
import PokeRating from '../components/PokeRating';

export default {
  title: 'Rating',
  component: PokeRating,
};

// This story uses a render function to fully control how the component renders.
export const Example = {
  render: () => (
    <Grid
      direction="column"
    >
      <Box>
        <PokeRating 
            name="ditto-rating"
            size='large'
            defaultValue={3}
        />
      </Box>
      <Box>
        {/* Other components goes here */}
      </Box>
    </Grid>
  ),
};