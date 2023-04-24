
import React from 'react';
import { Rating, Grid, Box } from "@mui/material";
import DittoSelected from './assets/ditto-select.svg';
import DittoUnselect from './assets/ditto-unselect.svg';
import PikachuSelected from './assets/pikachu_selected.svg';
import PikachuUnselect from './assets/pikachu_unselected.svg';

export default {
  title: 'Rating',
  component: Rating,
};

// This story uses a render function to fully control how the component renders.
export const Example = {
  render: () => (
    <Grid
      direction="column"
    >
      <Box>
        <Rating 
            name="ditto-rating"
            size='large'
            defaultValue={3}
            icon={
                <img src={DittoSelected} alt='ditto' />
            }
            emptyIcon={
                <img src={DittoUnselect} alt='ditto' />
            }
        />
      </Box>
      <Box>
        <Rating 
            name="ditto-rating"
            size='large'
            defaultValue={3}
            icon={
                <img src={PikachuSelected} alt='ditto' />
            }
            emptyIcon={
                <img src={PikachuUnselect} alt='ditto' />
            }
        />
      </Box>
    </Grid>
  ),
};