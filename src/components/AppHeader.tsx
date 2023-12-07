import {Box, Typography} from "@mui/material";
import React from "react";

export function AppHeader() {
    return (
        <Box py={'1rem'} sx={{color: 'white'}}>
            <Typography variant={'h5'}>Points of Interest</Typography>
            <Typography variant={'body1'}>Click on the map to create POIs</Typography>
        </Box>
    )
}