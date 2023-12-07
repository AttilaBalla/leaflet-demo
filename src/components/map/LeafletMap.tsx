import React from "react";
import {MapContainer, Marker, TileLayer, ImageOverlay, Tooltip} from "react-leaflet";
import {PositionCreator} from "./PositionCreator";
import {LatLng, LatLngBounds} from "leaflet";
import {IMapPosition, IMarker} from "../../types";
import {PositionMarker} from "./PositionMarker";
import {PositionFinder} from "./PositionFinder";
import {useQuery} from "@tanstack/react-query";
import {getMapData} from "../../utils";

interface IProps {
    createPosition: (position: LatLng) => void
    selectedPosition: LatLng | null
    positions: IMapPosition[]
}

export function LeafletMap(props: IProps) {

    var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';
    const {createPosition, positions, selectedPosition} = props;

    const mapDataQuery = useQuery({
        queryKey: ['mapData'],
        queryFn: getMapData})

    if(mapDataQuery.isLoading) {
        return null;
    }

    return (
        <MapContainer className="map-container" center={[47.341580, 13.390874]} zoom={15} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <PositionCreator createPosition={createPosition}/>
            {positions.map((position, key) => {
                return <PositionMarker position={position.coords} key={key}/>
            })}
            <PositionFinder position={selectedPosition}/>
            <ImageOverlay url={imageUrl} bounds={[[47.341580, 13.390874], [47.340, 13.389]]} />
            {mapDataQuery.data.items.map((item: IMarker) => {
                return (
                    <Marker position={item.position}>
                        <Tooltip>
                            {item.name}
                        </Tooltip>
                    </Marker>
                )
            })}

        </MapContainer>
    )
}