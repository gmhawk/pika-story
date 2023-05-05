import React from "react";
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from "@mui/material";

const Showcase = ({ title, children }) => {
    return(
        <Grid item>
            <Typography sx={{
                color: 'text.primary',
            }}>
                {title}
            </Typography>
            <Box 
                sx={{
                    border: 2,
                    borderColor: 'text.primary',
                    p: 2,
                }}
            >
                {children}
            </Box>
        </Grid>
    );
};

Showcase.propTypes = {
    title: PropTypes.string,
    children: PropTypes.elementType,
}

export default Showcase;