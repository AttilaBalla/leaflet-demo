import React from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import {PositionCreator} from "./PositionCreator";
import {LatLng} from "leaflet";
import {MapPosition} from "../../types";
import {PositionMarker} from "./PositionMarker";
import {PositionFinder} from "./PositionFinder";

interface IProps {
    createPosition: (position: LatLng) => void
    selectedPosition: LatLng | null
    positions: MapPosition[]
}

export function LeafletMap(props: IProps) {

    const {createPosition, positions, selectedPosition} = props;

    return (
        <MapContainer className="map-container" center={[47.497, 19.040]} zoom={12} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <PositionCreator createPosition={createPosition}/>
            {positions.map((position, key) => {
                return <PositionMarker position={position.coords} key={key}/>
            })}
            <PositionFinder position={selectedPosition}/>

        </MapContainer>
    )
}