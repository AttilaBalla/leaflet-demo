import {Box, Typography} from "@mui/material";
import React from "react";

export function AppHeader() {
    return (
        <Box py={'1rem'} sx={{color: 'white'}}>
            <Typography variant={'h5'}>Intermaps Code Challenge</Typography>
            <Typography variant={'body1'}>maps are cool</Typography>
        </Box>
    )
}