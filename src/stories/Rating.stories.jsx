
import React from 'react';
import { Grid, Box } from "@mui/material";
import PokeRating from '../components/PokeRating';

export default {
  title: 'Examples',
};

export const Example = {
  render: () => (
    <Grid>
      <Box>
        <PokeRating 
            name="rating"
            size="large"
            defaultValue={3}
        />
      </Box>
      <Box>
        {/* Other components goes here */}
      </Box>
    </Grid>
  ),
};