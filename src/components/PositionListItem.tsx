import React from "react";
import {Box, IconButton, Paper, Typography} from "@mui/material";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import DeleteIcon from '@mui/icons-material/Delete';
import {IMapPosition} from "../types";
import {LatLng} from "leaflet";

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem',
}

interface IProps {
    position: IMapPosition
    removePosition: (name: string) => void
    setSelectedPosition: (position: LatLng) => void
}

export function PositionListItem(props: IProps) {

    const {position, removePosition, setSelectedPosition} = props

    return (
        <Paper elevation={2} sx={styles}>
            <Box>
                <Typography variant={'body1'}>{position.name}</Typography>
                <Typography variant={'caption'}>lat:{position.coords.lat} lng:{position.coords.lng}</Typography>
            </Box>
            <Box>
                <IconButton onClick={() => {
                    setSelectedPosition(position.coords)
                }}>
                    <MyLocationIcon/>
                </IconButton>
                <IconButton onClick={() => {
                    removePosition(position.timeStamp)
                }}>
                    <DeleteIcon/>
                </IconButton>
            </Box>
        </Paper>
    )
}