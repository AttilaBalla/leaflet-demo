import React from "react";
import {IMapPosition} from "../types";
import {PositionListItem} from "./PositionListItem";
import {Stack} from "@mui/material";
import {LatLng} from "leaflet";

const styles = {
    height: '300px',
    overflowY: 'auto'
}

interface IProps {
    positions: IMapPosition[]
    removePosition: (name: string) => void
    setSelectedPosition: (position: LatLng) => void
}
export function PositionLister(props: IProps) {

    const {positions, removePosition, setSelectedPosition} = props;

    return(
        <Stack spacing={2} py={'1rem'} sx={styles}>
            {positions.map((position, key) => {
                return(
                    <PositionListItem
                        position={position}
                        removePosition={removePosition}
                        setSelectedPosition={setSelectedPosition}
                        key={key}/>
                )
            })}
        </Stack>
    )
}